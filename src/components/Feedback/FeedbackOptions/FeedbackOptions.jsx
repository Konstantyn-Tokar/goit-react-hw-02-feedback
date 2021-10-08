import React from "react";

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="#">
    <button className="#" type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button className="#" type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button className="#" type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
