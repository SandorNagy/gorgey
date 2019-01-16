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
            this.setState({
                marked: !currentMarked
            });
        }
    }

    createInputForAnswer(answer, index, validated, marked) {
        const buttonClass = setButtonClass(answer.valid, validated, marked);
        return (
            <div className='col-sx-2 v-center'>
                <Button className='answer-button' color={buttonClass} onClick={this.handleOnClick}>{this.createLabel(index)}</Button>
            </div>
        );
    }

    render() {

        return (
            <div className='question-answer row'>
                {this.createInputForAnswer(this.props.answer, this.props.index, this.props.validated, this.state.marked)}
                <div className='col-sx-10 font-14 v-center pl-0'><span>{this.props.answer.name}</span></div>
            </div>
        );
    }
}


export default AnswerMultiple;
