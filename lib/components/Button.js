import React, {Component} from 'react';

const Button = ({text, onClick, disabled, className}) => {
  return(
    <button
      className={className + '-button'}
      onClick={onClick}
      disabled={disabled}
      >{text}</button>
  )
}

export default Button;
