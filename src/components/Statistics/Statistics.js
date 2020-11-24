import React from 'react';
import PropTypes from 'prop-types';
import classes from './Statistics.module.css';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div className={classes.Statistics}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <p className={classes.Good}>Good: {good}</p>
        </li>
        <li className={classes.item}>
          <p className={classes.Neutral}>Neutral: {neutral}</p>
        </li>
        <li className={classes.item}>
          <p className={classes.Bad}>Bad: {bad}</p>
        </li>
        <li className={classes.item}>
          <p className={classes.Total}>Total: {total}</p>
        </li>
        <li className={classes.item}>
          <p className={classes.positivePercentage}>
            Positive feedback: {positivePercentage}%
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
