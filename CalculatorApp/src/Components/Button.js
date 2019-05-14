import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    isOperator = val => {
        //checks if the value is any of those operators
        return !isNaN(val) || val === "." || val === "=";
    };

    render() {
        return (
            <div
                className={`button-class ${this.isOperator(this.props.children) ? "" : "operator"}`}
                onClick={() => this.props.handleClick(this.props.children)}
            >
                {/* this going to input the button values */}
                {this.props.children}
            </div>
        );
    }
}

export default Button;