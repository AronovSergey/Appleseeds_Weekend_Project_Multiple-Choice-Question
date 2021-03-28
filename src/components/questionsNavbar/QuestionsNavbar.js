import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const QuestionsNavbar = ({ answers, onClick, selectedQuestion }) => {
    const length = (90 - 25) / answers.length;
    return (
        
        <div className="navbar">
            {
                answers.map( (userChoose, i) => (
                    <button 
                        key={i}
                        style={{
                            height: `${length}vw`,
                            width: `${length}vw`,
                            fontSize: `${length / 2}vw`,
                        }}
                        className={`navbar__btn ${selectedQuestion === i ? "secondary" : ""}`} 
                        onClick={() => onClick(i)}
                    >
                        {i + 1}
                        {userChoose !== -1 && (
                            <FontAwesomeIcon 
                                icon={faCheckCircle}
                                className="check_icon"
                            />
                        )}
                    </button>
                ))
            }
        </div>
    )   
}

export default QuestionsNavbar;
