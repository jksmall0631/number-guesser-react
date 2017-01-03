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
          min= '0'
          max= '100'
          ></input>
        <input
          type='number'
          className='min'
          placeholder='Min'></input>
        <input
          type='number'
          className='max'
          placeholder='Max'></input>
        <Button
          className='guess'
          text='Guess'
          onClick={this.submit}/>
        <Button
          disabled={!this.state.currentGuess}
          className='clear'
          text='Clear'
          onClick={() => {this.setState({currentGuess: ''})}}/>
        <Button
          disabled={!this.state.currentGuess}
          className='reset-game'
          text='Reset Game'
          onClick={this.reset}/>
      </section>
    )
  }
}
