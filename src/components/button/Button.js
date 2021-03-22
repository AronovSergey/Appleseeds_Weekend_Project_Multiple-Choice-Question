import React from 'react'

const Button = ({ text, onClick, type }) => {
    return (
        <button 
            className="btn"
            style={{
                left: type === "previous" ? "10%" : "",
                right: type === "next" ? "10%" : ""
            }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
