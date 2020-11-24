import React from 'react';
import PropTypes from 'prop-types';
import classes from './Section.module.css';

const Section = props => {
  const { title, children } = props;
  return (
    <>
      <section className={classes.Section}>
        <h2 className={classes.title}>{title}</h2>
        {children}
      </section>
    </>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
