import React, { Component } from 'react';

class Button extends Component {
    shouldComponentUpdate(nextProps){
        if(nextProps.selectedQuestion === nextProps.dataLength - 1 && nextProps.type === "next")
            return true;
        if(this.props.selectedQuestion === this.props.dataLength - 1 && this.props.type === "next")
            return true;
        if((nextProps.selectedQuestion === 0 || nextProps.selectedQuestion === 1 ) && this.props.type === "previous")
            return true;
        return false;
    }

    render() {
        const { text, onClick, type, selectedQuestion, dataLength, disabled = false } = this.props;
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
        );
    }
};

export default Button;
