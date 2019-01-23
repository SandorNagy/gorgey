import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { setButtonClass } from './Utils';

class AnswerMultiple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marked: false
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    createLabel(index) {
        const startIndex = 'A'.charCodeAt(0);
        return String.fromCharCode(startIndex + index);
    }

    handleOnClick() {
        if (!this.props.validated) {
            const currentMarked = this.state.marked;
            this.setAnswerStat(!currentMarked, this.props.answer);
            this.setState({
                marked: !currentMarked
            });
        }
    }

    setAnswerStat(marked, answer) {
        if (marked) {
            this.props.handleAnswerStat(
                answer.valid ? 1 : 0,
                answer.valid ? 0 : 1
            )
        }
        else {
            this.props.handleAnswerStat(
                answer.valid ? -1 : 0,
                answer.valid ? 0 : -1
            )
        }
    }

    createInputForAnswer(answer, index, validated, marked) {
        const buttonClass = setButtonClass(answer.valid, validated, marked);
        return (
            <Button className='answer-button' color={buttonClass} onClick={this.handleOnClick}>{this.createLabel(index)}</Button>
        );
    }

    render() {

        return (
            <div className='question-answer row'>
                <div className='v-center'>
                    {this.createInputForAnswer(this.props.answer, this.props.index, this.props.validated, this.state.marked)}
                    <span className='font-14'>{this.props.answer.name}</span>
                </div>
            </div>
        );
    }
}


export default AnswerMultiple;
