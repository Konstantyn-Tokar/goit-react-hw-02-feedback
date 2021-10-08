import React from "react";

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div className="#">
    <button className="#" type="button" onClick={onGood}>
      Good
    </button>
    <button className="#" type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button className="#" type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
