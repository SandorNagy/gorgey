import React, { Component } from 'react';
import AnswerMultiple from './AnswerMultiple';
import AnswerTrueOrFalse from './AnswerTrueOrFalse';
import { shuffle } from './Utils';
import { Button } from 'reactstrap';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            answers: shuffle(this.props.question.answers)
        }
        this.handleValidation = this.handleValidation.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleValidation() {
        const currentValitatedValue = this.state.validated;
        if (!currentValitatedValue) {
            this.setState({
                validated: true
            });
        }
        this.props.handleAnsweredQuestions();
    }

    handleTabChange() {
        const nextTab = this.props.activeTab + 1;
        if (this.props.questionsLength > nextTab) {
            this.props.handleToggle(nextTab);
        }
    }

    createAnswerItems(question, answers, validated) {
        const answerItems = [];
        answers.forEach((answer, index) => {
            answerItems.push(
                question.type === 0 ?
                    <AnswerMultiple question={question} answer={answer} index={index} validated={validated} /> :
                    <AnswerTrueOrFalse question={question} answer={answer} validated={validated} />
            );
        });

        return answerItems;
    }

    render() {
        return (
            <div key={this.props.questionId}>
                <div class='question-name'>
                    {this.props.question.name}
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