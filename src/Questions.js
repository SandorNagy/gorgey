import React, { Component } from 'react';
import { getQuestionIdsByTopicId, getQuestionById } from "./data/questions";
import Question from './Question';
import { shuffle } from './Utils';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Questions extends Component {
    constructor(props) {
        super(props);

        this.changeToggle = this.changeToggle.bind(this);
        this.incraseAnsweredQuestions = this.incraseAnsweredQuestions.bind(this);
        this.state = {
            activeTab: 0,
            questionIds: shuffle(getQuestionIdsByTopicId(this.props.match.params.topicid)),
            answeredQuestions: 0
        };
    }

    changeToggle(tab) {
        if (this.state.activeTab !== tab &&
            this.state.answeredQuestions >= tab) {
            this.setState({
                activeTab: tab
            });
        }
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
                                handleToggle={this.changeToggle}
                                activeTab={this.state.activeTab}
                                questionsLength={this.state.questionIds.length} />
                        </Col>
                    </Row>
                </TabPane>
            )
            return null;
        });

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