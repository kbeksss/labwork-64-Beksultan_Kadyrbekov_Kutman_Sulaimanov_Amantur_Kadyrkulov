import React from 'react';
import './Button.css';
const Button = props => (
    <button className='Button' type={props.type} onClick={props.onClick}>
        {props.children}
    </button>
);

export default Button;