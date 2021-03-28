import { data, dataLength } from './data';
import React, { Component } from 'react'
import QuestionsNavbar from '../questionsNavbar/QuestionsNavbar';
import Question from '../question/Question';
import Button from '../button/Button';

export default class Main extends Component {
    state = {
        selectedQuestion: 0,
        data: [],
    }

    componentDidMount() {
        this.setState({ data: data.map(question => ({ ...question, userChoose: -1}) )})
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

    onRadioButtonChange(event) {
        const newData = this.state.data;
        newData[this.state.selectedQuestion].userChoose = event.target.value;
        this.setState({ data: newData });
    }

    render() {
        if(this.state.data.length > 0) {
            const { question, answers, userChoose } = this.state.data[this.state.selectedQuestion];
            return (
                <div>
                    <QuestionsNavbar 
                        answers={this.state.data.map(question => question.userChoose)}
                        onClick={(index) => this.onNavbarClick(index)}
                        selectedQuestion={this.state.selectedQuestion}
                    />

                    <Question 
                        question={question}
                        answers={answers}
                        userChoose={userChoose}
                        onRadioButtonChange={(event) => this.onRadioButtonChange(event)}
                    />

                    <Button 
                        text="NEXT QUESTION"
                        type="next"
                        onClick={() => this.onNextClick()}
                        selectedQuestion={this.state.selectedQuestion}
                    />

                    <Button 
                        text="PREVIOUS QUESTION"
                        type="previous"
                        onClick={() => this.onPreviousClick()}
                        selectedQuestion={this.state.selectedQuestion}
                    />
                </div>
            )
        }
        else {
            return <h2>Loading...</h2>
        }
    }
}
