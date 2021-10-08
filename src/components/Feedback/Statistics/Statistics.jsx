import React from "react";
// import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className="#">Good: {good}</p>
    <p className="#">Neutral: {neutral}</p>
    <p className="#">Bad: {bad}</p>
    <p className="#">Total: {total}</p>
    <p className="#">Positive Feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;
