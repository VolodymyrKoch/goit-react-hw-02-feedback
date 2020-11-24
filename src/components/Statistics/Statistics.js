import React from 'react';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div>
      
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};
export default Statistics;
