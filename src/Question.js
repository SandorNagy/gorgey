import React, { Component } from 'react';
import AnswerMultiple from './AnswerMultiple';
import AnswerTrueOrFalse from './AnswerTrueOrFalse';
import AnswerComplete from './AnswerComplete';
import { shuffle } from './Utils';
import { Button } from 'reactstrap';
import ReactCountdownClock from 'react-countdown-clock';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countDownEnd: false,
            validated: false,
            answers: shuffle(this.props.question.answers),
            clockPaused: false
        }
        this.handleValidation = this.handleValidation.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.questionTypeSelector = this.questionTypeSelector.bind(this);
        this.countDownEnd = this.countDownEnd.bind(this);
    }

    handleValidation() {
        const currentValitatedValue = this.state.validated;
        if (!currentValitatedValue) {
            this.setState({
                validated: true,
                clockPaused: true
            });
        }
        this.props.handleAnsweredQuestions();
    }

    handleTabChange() {
        const nextTab = this.props.activeTab + 1;
        if (this.props.questionsLength >= nextTab) {
            this.props.handleToggle(nextTab);
        }
    }

    createAnswerItems(question, answers, validated) {
        const answerItems = [];
        answers.forEach((answer, index) => {
            answerItems.push(
                this.questionTypeSelector(question, answer, index, validated)
            );
        });

        return answerItems;
    }

    questionTypeSelector(question, answer, index, validated) {
        switch (question.type) {
            case 0:
                return (<AnswerMultiple question={question} answer={answer} index={index} validated={validated} handleAnswerStat={this.props.handleAnswerStat} />);
            case 1:
                return (<AnswerTrueOrFalse question={question} answer={answer} validated={validated} handleAnswerStat={this.props.handleAnswerStat} />);
            case 2:
                return (<AnswerComplete question={question} answer={answer} index={index} validated={validated} handleAnswerStat={this.props.handleAnswerStat} />);
            default:
                return null;
        }
    }

    countDownEnd() {
        this.setState({
            countDownEnd: true,
            validated: true
        });
        this.props.handleAnsweredQuestions();
    }

    render() {
        return (
            <div key={this.props.questionId}>
                <div className='row mb-2'>
                    <div className='question-name col-md-10'>
                        {this.props.question.name}
                    </div>
                    <div className='countdown col-md-2'>
                        {this.props.clockStart ?
                            <ReactCountdownClock seconds={60}
                                color={this.state.countDownEnd ? '#dc3545' : '#0069d9'}
                                alpha={0.9}
                                size={45}
                                onComplete={this.countDownEnd}
                                paused={this.state.clockPaused}
                                pausedText='||' />
                            :
                            null
                        }
                    </div>
                </div>
                <div class='answers'>
                    {this.createAnswerItems(this.props.question, this.state.answers, this.state.validated)}
                </div>
                {
                    this.state.validated ?
                        <Button color="secondary" onClick={this.handleTabChange}>Tovább</Button> :
                        <Button color="secondary" onClick={this.handleValidation}>Ellenőrzés</Button>
                }
            </div>
        );
    }
}


export default Question;