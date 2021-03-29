import React from 'react'

const Button = ({ text, onClick, type, selectedQuestion, dataLength, disabled = false }) => {
    const isSubmit = type === "next" && selectedQuestion === (dataLength - 1);
    return (
        <button 
            className={`btn ${(disabled && isSubmit) ? "secondary" : ""}`} 
            style={{
                left: type === "previous" ? "10%" : "",
                right: type === "next" ? "10%" : "",
                display: (type === "previous" && selectedQuestion === 0) ? "none" : "",
            }}
            onClick={onClick}
            disabled={disabled && isSubmit}
        >
            {isSubmit ? "Submit" : text}
        </button>
    )
}

export default Button
