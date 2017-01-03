import React, {Component} from 'react';

const LastGuess = ({last}) => {
  return(
    <section>
      <p>Your last guess was...</p>
      <h1>{last}</h1>
      <p></p>
    </section>
  )
}

export default LastGuess;
