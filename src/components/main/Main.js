import { data, dataLength } from './data';
import React, { Component } from 'react'
import QuestionsNavbar from '../questionsNavbar/QuestionsNavbar';
import Question from '../question/Question';
import Button from '../button/Button';

export default class Main extends Component {
    state = {
        selectedQuestion: 0
    }

    onNavbarClick(index) {
        this.setState({ selectedQuestion: index })
    }

    onNextClick() {
        if(this.state.selectedQuestion < dataLength - 1)
            this.setState({ selectedQuestion: this.state.selectedQuestion + 1 })
    }

    onPreviousClick() {
        if(this.state.selectedQuestion > 0)
            this.setState({ selectedQuestion: this.state.selectedQuestion - 1 })
    }

    render() {
        const { question, answers } = data[this.state.selectedQuestion];
        return (
            <div>
                <QuestionsNavbar 
                    numberOfQuestions={dataLength}
                    onClick={(index) => this.onNavbarClick(index)}
                    selectedQuestion={this.state.selectedQuestion}
                />

                <Question 
                    question={question}
                    answers={answers}
                />

                <Button 
                    text="NEXT QUESTION"
                    type="next"
                    onClick={() => this.onNextClick()}
                />

                <Button 
                    text="PREVIOUS QUESTION"
                    type="previous"
                    onClick={() => this.onPreviousClick()}
                />
            </div>
        )
    }
}
