import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { setButtonClass } from './Utils';

class AnswerTrueOrFalse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markedTrue: false,
            markedFalse: false
        }
        this.handleOnClickTrue = this.handleOnClickTrue.bind(this);
        this.handleOnClickFalse = this.handleOnClickFalse.bind(this);
    }

    handleOnClickTrue() {
        if (!this.props.validated) {
            const currentMarkedTrue = this.state.markedTrue;
            this.setAnswerStatTrue(!currentMarkedTrue, this.props.answer);
            this.setState({
                markedTrue: !currentMarkedTrue,
                markedFalse: false
            });
        }
    }

    handleOnClickFalse() {
        if (!this.props.validated) {
            const currentMarkedFalse = this.state.markedFalse;
            this.setAnswerStatFalse(!currentMarkedFalse, this.props.answer);
            this.setState({
                markedFalse: !currentMarkedFalse,
                markedTrue: false
            });
        }
    }

    setAnswerStatTrue(marked, answer)
    {
        if(marked) {
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

    setAnswerStatFalse(marked, answer)
    {
        if(marked) {
            this.props.handleAnswerStat(
                !answer.valid ? 1 : 0,
                !answer.valid ? 0 : 1
            )
        }
        else {
            this.props.handleAnswerStat(
                !answer.valid ? -1 : 0,
                !answer.valid ? 0 : -1
            )
        }
    }

    createInputForAnswer(answer, validated, markedTrue, markedFalse) {
        const buttonClassTrue = setButtonClass(answer.valid, validated, markedTrue);
        const buttonClassFalse = setButtonClass(!answer.valid, validated, markedFalse)
        return (
            <div className='col-sx-2 v-center'>
                <Button className='answer-button' color={buttonClassTrue} onClick={this.handleOnClickTrue}>I</Button>
                <Button className='answer-button' color={buttonClassFalse} onClick={this.handleOnClickFalse}>H</Button>
            </div>)
    }

    render() {

        return (
            <div className='question-answer row'>
                {this.createInputForAnswer(this.props.answer, this.props.validated, this.state.markedTrue, this.state.markedFalse)}
                <div className='col-sm-10 font-14 v-center pl-0'><span>{this.props.answer.name}</span></div>
            </div>
        );
    }
}


export default AnswerTrueOrFalse;
