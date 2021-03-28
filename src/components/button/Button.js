import React from 'react'

const Button = ({ text, onClick, type, selectedQuestion }) => {
    const isSubmit = type === "next" && selectedQuestion === 9;
    return (
        <button 
            className={`btn ${(type === "next"&& selectedQuestion === 9) ? "secondary" : ""}`} 
            style={{
                left: type === "previous" ? "10%" : "",
                right: type === "next" ? "10%" : "",
                display: (type === "previous" && selectedQuestion === 0) ? "none" : "",
            }}
            onClick={onClick}
        >
            {isSubmit ? "Submit" : text}
        </button>
    )
}

export default Button
