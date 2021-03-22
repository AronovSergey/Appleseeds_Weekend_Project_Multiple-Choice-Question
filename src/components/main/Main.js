import { data, dataLength } from './data';
import React, { Component } from 'react'
import QuestionsNavbar from '../questionsNavbar/QuestionsNavbar';

export default class Main extends Component {
    render() {
        return (
            <div>
                <QuestionsNavbar 
                    numberOfQuestions={dataLength}
                />
            </div>
        )
    }
}
