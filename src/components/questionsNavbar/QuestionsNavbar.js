import React from 'react'

const QuestionsNavbar = ({ numberOfQuestions }) => {
    const length = (90 - 25) / numberOfQuestions;
    return (
        <div className="navbar">
            {
                [...Array(10).keys()].map( i => (
                    <button 
                        key={i}
                        className="navbar__btn" 
                        style={{
                            height: `${length}vw`,
                            width: `${length}vw`,
                            fontSize: `${length / 2}rem`,
                        }}
                    >
                        {i + 1}
                    </button>
                ))
            }
        </div>
    )   
}

export default QuestionsNavbar
