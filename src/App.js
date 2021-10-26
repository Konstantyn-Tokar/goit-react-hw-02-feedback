import React, { Component } from "react";
import "./App.css";
import Section from "./components/Feedback/Section";
import Statistics from "./components/Feedback/Statistics";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Notification from "./components/Feedback/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (e) => {
    this.setState((prevState) => ({
      [e.target.value]: prevState[e.target.value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const sum = good + neutral + bad;
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const sum = this.countTotalFeedback();

    const percent = Math.ceil((good * 100) / sum);
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
