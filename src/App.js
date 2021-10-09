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
    const value = e.target.innerText;
    if (value === "Good") {
      this.setState((prevState) => {
        return {
          good: prevState.good + 1,
        };
      });
    } else if (value === "Neutral") {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    } else if (value === "Bad") {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
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

    //____После рендера по условию необходимость в проверке пропала___
    // if (isNaN(percent)) {
    //   return 0;
    // } else {
    //   return percent;
    // }
    //________________________________________________________________
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
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
