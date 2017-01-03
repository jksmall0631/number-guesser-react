import React, {Component} from 'react';

const Button = ({text, onClick, disabled}) => {
  return(
    <button
      onClick={onClick}
      disabled={disabled}
      >{text}</button>
  )
}

export default Button;
