import React, {Component} from 'react';

import Button from './Button';

export default class InputSection extends Component {
  constructor(){
    super();
    this.state = {
      currentGuess: '',
    }
    this.updateCurrent = this.updateCurrent.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateCurrent(e) {
    let input = e.target.value;
    this.setState({currentGuess: input});
  }

  submit() {
    this.props.updateState(this.state.currentGuess);
    this.setState({currentGuess: ''});
  }

  reset() {
    this.props.clearState();
    this.setState({currentGuess: ''});
  }

  render() {
    return(
      <section>
        <input
          type='number'
          className='input'
          placeholder='Your Best Guess'
          onChange={this.updateCurrent}
          value={this.state.currentGuess}
          ></input>
        <Button className='guess' text='Guess' onClick={this.submit}/>
        <Button className='clear' text='Clear' onClick={() => {this.setState({currentGuess: ''})}}/>
        <Button className='reset-game' text='Reset Game' onClick={this.reset}/>
      </section>
    )
  }
}
