import React from 'react';

const Question = ({ question, answers, onRadioButtonChange, userChoose }) => {
    return (
        <div className="question">
            <h1>{question}</h1>
            <div>
                <div className="question__answer">
                    <input
                        type="radio" 
                        value="1" 
                        name="answer" 
                        checked={ userChoose === "1" }
                        onChange={(event) => onRadioButtonChange(event)}
                    /> {answers[0]}
                </div>
                <div className="question__answer">
                    <input
                        type="radio" 
                        value="2" 
                        name="answer" 
                        checked={ userChoose === "2" }
                        onChange={(event) => onRadioButtonChange(event)}
                    /> {answers[1]}
                </div>
                <div className="question__answer">
                    <input
                        type="radio" 
                        value="3" 
                        name="answer" 
                        checked={ userChoose === "3" }
                        onChange={(event) => onRadioButtonChange(event)}
                    /> {answers[2]}
                </div>
                <div className="question__answer">
                    <input
                        type="radio" 
                        value="4" 
                        name="answer" 
                        checked={ userChoose === "4" }
                        onChange={(event) => onRadioButtonChange(event)}
                    /> {answers[3]}
                </div>
                
                
            </div>
        </div>
    )
}

export default Question;