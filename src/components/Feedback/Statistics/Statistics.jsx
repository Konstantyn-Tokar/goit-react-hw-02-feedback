import React from "react";
import PropTypes from "prop-types";

import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.React}>
    <p className={s.statistics}>
      Good: <span className={s.status__g}>{good}</span>
    </p>
    <p className={s.statistics}>
      Neutral: <span className={s.status__n}>{neutral}</span>
    </p>
    <p className={s.statistics}>
      Bad: <span className={s.status__b}>{bad}</span>
    </p>
    <p className={s.statistics}>
      Total: <span className={s.status}>{total}</span>
    </p>
    <p className={s.statistics}>
      Positive Feedback: <span className={s.status}>{positivePercentage}%</span>
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
