import React from 'react';
import PropTypes from 'prop-types';
import classes from './Notification.module.css';

const Notification = ({ message }) => {
  return <div className={classes.Notification}>{message}</div>;
};
export default Notification;

Notification.defaultProps = {
  message: 'No feedback given',
};
Notification.propTypes = { message: PropTypes.string };
