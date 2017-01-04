import React, {Component} from 'react';

const LastGuess = ({last, wordResponse}) => {
  return(
    <section className='lastGuess'>
      <p>Your last guess was...</p>
      <h1 className='display-number'>{last}</h1>
      <p>{wordResponse}</p>
    </section>
  )
}

export default LastGuess;
