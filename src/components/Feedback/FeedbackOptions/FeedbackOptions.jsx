import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.box}>
    {options.map((value) => (
      <button
        className={s.button}
        type="button"
        key={shortid.generate()}
        onClick={onLeaveFeedback}
        value={value}
      >
        {value}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
