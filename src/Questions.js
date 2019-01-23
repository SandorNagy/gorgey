import React, { Component } from 'react';
import { getQuestionIdsByTopicId, getQuestionById } from "./data/questions";
import Question from './Question';
import { shuffle } from './Utils';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Progress, Button } from 'reactstrap';
import classnames from 'classnames';

class Questions extends Component {
    constructor(props) {
        super(props);

        this.changeToggle = this.changeToggle.bind(this);
        this.incraseAnsweredQuestions = this.incraseAnsweredQuestions.bind(this);
        this.changeAnswerStat = this.changeAnswerStat.bind(this);
        this.state = {
            activeTab: 0,
            questionIds: shuffle(getQuestionIdsByTopicId(this.props.match.params.topicid)),
            answeredQuestions: 0,
            correctAnswer: 0,
            wrongAnswer: 0,
            maxPoints: this.getMaxPoints(getQuestionIdsByTopicId(this.props.match.params.topicid)),
            clockStart: this.setClockStart(getQuestionIdsByTopicId(this.props.match.params.topicid))
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    setClockStart(questionIds) {
        const clockStart = [];
        questionIds.map((id, index) => {
            index === 0 ? clockStart[index] = true : clockStart[index] = false;
            return null;
        });
        return clockStart;
    }

    getMaxPoints(questionIds) {
        let max = 0;
        questionIds.map(id => {
            const question = getQuestionById(id);
            if (question.type === 0) {
                const correctAnswers = question.answers.filter((answer) => { return answer.valid === true });
                max += correctAnswers.length;
            }
            else if (question.type === 1 || question.type === 2) {
                max += question.answers.length;
            }
            return null;
        });

        return max;
    }

    changeToggle(tab) {
        if (this.state.activeTab !== tab &&
            this.state.answeredQuestions >= tab) {
            const currentClockStart = this.state.clockStart;
            currentClockStart[tab] = true;
            this.setState({
                activeTab: tab,
                clockStart: currentClockStart
            });
        }
        window.scrollTo(0, 0);
    }

    changeAnswerStat(correct, wrong) {
        const currentWrong = this.state.wrongAnswer;
        const currentCorrect = this.state.correctAnswer;
        this.setState({
            correctAnswer: currentCorrect + correct,
            wrongAnswer: currentWrong + wrong,
        });
    }

    incraseAnsweredQuestions() {
        let currentAnsweredQuestions = this.state.answeredQuestions;
        this.setState({
            answeredQuestions: currentAnsweredQuestions + 1
        });
    }

    createQuestionTabs(questionIds) {
        const questions = [];
        const links = [];

        //jelmagyarázat
        links.push(
            <NavItem>
                <NavLink
                    className={classnames({ active: this.state.activeTab === -1 }) + ' available-tab'}
                    onClick={() => { this.changeToggle(-1); }}
                >
                    Jelmagyarázat
                </NavLink>
            </NavItem>
        )

        questions.push(
            <TabPane tabId={'-1'}>
                <Row>
                    <Col sm="12" className='question-content ml-4'>
                        <div className='row mb-2 mt-3'>
                            <div>
                                <Button className='answer-button' color='warning'>A</Button>
                            </div>
                            <div className='font-14 v-center'>
                                Jelöletlen válaszlehetőség.
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div>
                                <Button className='answer-button' color='primary'>B</Button>
                            </div>
                            <div className='font-14 v-center'>
                                Megjelölt válaszlehetőség.
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div>
                                <Button className='answer-button' color='success'>C</Button>
                            </div>
                            <div className='font-14 v-center'>
                                Megjelölt helyes válasz.
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div>
                                <Button className='answer-button' color='danger'>D</Button>
                            </div>
                            <div className='font-14 v-center'>
                                Megjelölt helytelen válasz.
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div>
                                <Button className='answer-button' color='info'>E</Button>
                            </div>
                            <div className='font-14 v-center'>
                                Jelöletlen helyes válasz.
                            </div>
                        </div>
                        <div className='row mb-2 mt-3'>
                            <Button color="secondary" onClick={() => { this.changeToggle(0); }}>Tovább</Button>
                        </div>
                    </Col>
                </Row>
            </TabPane>
        )

        //kérdések
        questionIds.map((id, index) => {
            const question = getQuestionById(id);
            links.push(
                <NavItem>
                    <NavLink
                        className={classnames({ active: this.state.activeTab === index }) + (this.state.answeredQuestions >= index ? ' available-tab' : ' unavailable-tab disabled')}
                        onClick={() => { this.changeToggle(index); }}
                    >
                        {index + 1}.
                    </NavLink>
                </NavItem>
            )
            questions.push(
                <TabPane tabId={index.toString()}>
                    <Row>
                        <Col sm="12" className='question-content'>
                            <Question
                                questionId={id}
                                question={question}
                                handleAnsweredQuestions={this.incraseAnsweredQuestions}
                                handleAnswerStat={this.changeAnswerStat}
                                handleToggle={this.changeToggle}
                                activeTab={this.state.activeTab}
                                questionsLength={this.state.questionIds.length}
                                clockStart={this.state.clockStart[index]} />
                        </Col>
                    </Row>
                </TabPane>
            )
            return null;
        });

        //összegzés
        links.push(
            <NavItem>
                <NavLink
                    className={classnames({ active: this.state.activeTab === questionIds.length }) + (this.state.answeredQuestions === questionIds.length ? ' available-tab' : ' unavailable-tab disabled')}
                    onClick={() => { this.changeToggle(questionIds.length); }}
                >
                    Eredmény
                </NavLink>
            </NavItem>
        )

        questions.push(
            <TabPane tabId={(questionIds.length).toString()}>
                <Row>
                    <Col sm="12" className='question-content'>
                        <div className='text-center mr-4'>
                            <p>Gratulálok, teljesítetted a feladatsort!</p>
                            <img width='150' className='mb-3' src={require('./images/award.png')} alt="" />
                        </div>
                        <div>
                            <Progress className='summary-progress' color="warning" value={100} >{this.state.maxPoints}</Progress>
                            <Progress className='summary-progress' color="success" value={(this.state.correctAnswer / this.state.maxPoints) * 100} >{this.state.correctAnswer}</Progress>
                            <Progress className='summary-progress' color="info" value={((this.state.maxPoints - (this.state.correctAnswer + this.state.wrongAnswer)) / this.state.maxPoints) * 100} >{this.state.maxPoints - (this.state.correctAnswer + this.state.wrongAnswer)}</Progress>
                            <Progress className='summary-progress' color="danger" value={(this.state.wrongAnswer / this.state.maxPoints) * 100} >{this.state.wrongAnswer}</Progress>
                        </div>
                    </Col>
                </Row>
            </TabPane>
        )

        return {
            links,
            questions
        };
    }

    render() {
        const tabs = this.createQuestionTabs(this.state.questionIds);
        return (
            <section className='section-questions'>
                <div className='container'>
                    <div className='questions-tab offset-md-1 col-md-10'>
                        <Progress className='mb-3' animated color="warning" value={(this.state.answeredQuestions / this.state.questionIds.length) * 100}>{((this.state.answeredQuestions / this.state.questionIds.length) * 100).toFixed(2)}%</Progress>
                        <Nav tabs>
                            {tabs.links}
                        </Nav>
                        <TabContent activeTab={this.state.activeTab.toString()}>
                            {tabs.questions}
                        </TabContent>
                    </div>
                </div>
            </section>
        );
    }
}


export default Questions;