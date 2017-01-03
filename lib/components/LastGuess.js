import React, {Component} from 'react';

const LastGuess = ({last, wordResponse}) => {
  return(
    <section>
      <p>Your last guess was...</p>
      <h1>{last}</h1>
      <p>{wordResponse}</p>
    </section>
  )
}

export default LastGuess;
