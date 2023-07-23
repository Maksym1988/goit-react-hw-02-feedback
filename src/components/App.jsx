import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} />
        </Section>
        <Section title="Statistics"></Section>
      </div>
    );
  }
}

export default App;
