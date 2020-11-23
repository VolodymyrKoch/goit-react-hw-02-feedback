import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback.js';
// import Feedback from './components/Feedback/feedback.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlSetState = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  render() {
    return (
      // <>
      <Feedback
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        propSet={this.handlSetState}
      />
      // </>
    );
  }
}
