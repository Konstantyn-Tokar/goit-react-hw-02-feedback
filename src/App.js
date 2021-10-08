import React, { Component } from "react";
import "./App.css";
import Section from "./components/Feedback/Section";
import Statistics from "./components/Feedback/Statistics";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  pressingBtnGood = () => {
    console.log("Нажал Good");
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  pressingBtnNeutral = () => {
    console.log("Нажал Neutral");
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  pressingBtnBad = () => {
    console.log("Нажал Bad");
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const sum = good + neutral + bad;

    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percent = Math.ceil((good * 100) / this.countTotalFeedback());
    if (isNaN(percent)) {
      return 0;
    } else {
      return percent;
    }
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.pressingBtnGood}
            onNeutral={this.pressingBtnNeutral}
            onBad={this.pressingBtnBad}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
