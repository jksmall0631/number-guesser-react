import React, {Component} from 'react';

import LastGuess from './LastGuess';
import InputSection from './InputSection';
import Compare from './Compare';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      lastGuess: null,
      random: null,
      wordResponse: null,
    }
  this.updateState = this.updateState.bind(this);
  this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    this.setState({random: Math.floor(Math.random()*100)});
  }

  updateState(number) {
    this.setState({lastGuess: number});
    let answer = Compare(number, this.state.random);
    if(answer.length === 18){
      this.setState({random: Math.floor(Math.random()*100)});
    }
    this.setState({wordResponse: answer});
  }

  clearState() {
    this.setState({lastGuess: ''});
    this.setState({wordResponse: null});
    this.setState({random: Math.floor(Math.random()*100)});
  }

  render() {
    return(
      <section>
        <h1>Number Guesser in React</h1>
        <LastGuess last={this.state.lastGuess} wordResponse={this.state.wordResponse}/>
        <InputSection updateState={this.updateState} clearState={this.clearState}/>
      </section>
    )
  }
}
