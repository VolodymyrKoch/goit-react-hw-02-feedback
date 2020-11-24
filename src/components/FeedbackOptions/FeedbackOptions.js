import React from 'react';
import classes from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options }) => {
  console.log(options);
  return (
    <section>
      <div className={classes.FeedbackOptions}>
        <button
          className={classes.btnGood}
          type="button"
          name="good"
          onClick={options}
        >
          Good
        </button>
        <button
          className={classes.btnNeutral}
          type="button"
          name="neutral"
          onClick={options}
        >
          Neutral
        </button>
        <button
          className={classes.btnBad}
          type="button"
          name="bad"
          onClick={options}
        >
          Bad
        </button>
      </div>
    </section>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = { options: PropTypes.func };
