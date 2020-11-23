import React from 'react';

const Feedback = ({ good, neutral, bad, propSet }) => {
  return (
    <section>
      <div>
        <h1>Please leave feedback</h1>
      </div>
      <div>
        <button type="button" name="good" onClick={propSet}>
          Good
        </button>
        <button type="button" name="neutral" onClick={propSet}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={propSet}>
          Bad
        </button>
      </div>
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>
            {' '}
            <p>Good:3</p>{' '}
          </li>
          <li>
            {' '}
            <p>Neutral:2</p>{' '}
          </li>
          <li>
            {' '}
            <p>Bad:1</p>{' '}
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Feedback;
