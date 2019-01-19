import React, { Component } from 'react';
import { Button } from 'reactstrap';

class AnswerMultiple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.answerInputOnChange = this.answerInputOnChange.bind(this);
        this.setInput = this.setInput.bind(this);
    }

    createLabel(index) {
        const startIndex = 'A'.charCodeAt(0);
        return String.fromCharCode(startIndex + index);
    }

    createMarkForAnswer(index) {
        return (
            <div className='col-sx-2 v-center'>
                <Button className='answer-button' color='secondary'>{this.createLabel(index)}</Button>
            </div>
        );
    }

    answerInputOnChange(event) {
        this.setAnswerStat(event.target.value, this.state.value, this.props.answer);
        this.setState({
            value: event.target.value
        });
    }

    setAnswerStat(newValue, oldValue, answer) {
        if (!answer.valid.indexOf(oldValue) > -1 && answer.valid.indexOf(newValue) > -1) {
            this.props.handleAnswerStat(1, -1);
        }
        else if(answer.valid.indexOf(oldValue) > -1 && !answer.valid.indexOf(newValue) > -1) {
            this.props.handleAnswerStat(-1, 1);
        } else if(this.state.value === '' && !answer.valid.indexOf(newValue) > -1) {
            this.props.handleAnswerStat(0, 1);
        }
    }

    setInput(answer, validated) {
        if (validated) {
            const correct = answer.valid.indexOf(this.state.value) > -1;
            return {
                class: correct ? 'is-valid form-control' : 'is-invalid form-control',
                value: correct ? this.state.value : answer.valid[0]
            }
        }
        else {
            return {
                class: 'form-control',
                value: this.state.value
            }
        }
    }

    createInputForAnswer(answer, validated) {
        const splittedName = answer.name.split('|');
        const inputSetting = this.setInput(answer, validated);
        return (
            <div>
                <label className='mr-1'>
                    {splittedName[0]}
                </label>
                <div className='inline-block mr-1'>
                    <input type='text' className={inputSetting.class} value={inputSetting.value} onChange={this.answerInputOnChange} />
                </div>
                <label>
                    {splittedName[1]}
                </label>
            </div>
        );
    }

    render() {
        return (
            <div className='question-answer row'>
                {this.createMarkForAnswer(this.props.index)}
                <div className='col-sx-10 font-14 v-center pl-0'>
                    {this.createInputForAnswer(this.props.answer, this.props.validated)}
                </div>
            </div>
        );
    }
}


export default AnswerMultiple;
