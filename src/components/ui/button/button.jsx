import React from 'react';
import { Link } from 'react-router-dom';
import classes from './button.module.scss';

const Button = (props) => {
  const { text, href = 'default' } = props;
  return (
    <Link className={classes.button} to={href}>
      <button className={classes.text}>{text}</button>
    </Link>
  );
};

export default Button;
