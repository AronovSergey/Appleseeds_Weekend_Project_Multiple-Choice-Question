import React from 'react';

const Question = ({question, answers}) => {
    return (
        <div className="question">
            <h1
                class="question__title"
            >{question}</h1>
            <div>
                <div className="question__answer">
                    <input
                        type="radio" 
                        value="1" 
                        name="answer" 
                        
                    /> {answers[0]}
                </div>
                <div className="question__answer">
                    <input
                        type="radio" 
                        value="2" 
                        name="answer" 
                        
                    /> {answers[1]}
                </div>
                <div className="question__answer">
                    <input
                        type="radio" 
                        value="3" 
                        name="answer" 
                        
                    /> {answers[2]}
                </div>
                <div className="question__answer">
                    <input
                        type="radio" 
                        value="4" 
                        name="answer" 
                    /> {answers[3]}
                </div>
                
                
            </div>
        </div>
    )
}

export default Question;