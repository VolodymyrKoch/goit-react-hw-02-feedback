import React, { Component } from 'react';
import Notification from './components/Notification/Notification.js';
import Statistics from './components/Statistics/Statistics.js';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.js';
import Section from './components/Section/Section.js';
import './bases.css';

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positivePercentage = Math.round(
      (good / this.countTotalFeedback()) * 100,
    );
    return positivePercentage;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.handlSetState} />
        </Section>

        <Section title="Statisticsk">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
