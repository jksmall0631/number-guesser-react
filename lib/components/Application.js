import React, {Component} from 'react';

import LastGuess from './LastGuess';
import InputSection from './InputSection';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      lastGuess: null,
    }
  this.updateState = this.updateState.bind(this);
  this.clearState = this.clearState.bind(this);
  }

  updateState(number) {
    this.setState({lastGuess: number});
  }

  clearState() {
    this.setState({lastGuess: ''});
  }

  render() {
    return(
      <section>
        <h1>Number Guesser in React</h1>
        <LastGuess last={this.state.lastGuess}/>
        <InputSection updateState={this.updateState} clearState={this.clearState}/>
      </section>
    )
  }
}
