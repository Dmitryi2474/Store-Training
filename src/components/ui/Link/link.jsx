import React from 'react';
import { Link } from 'react-router-dom';
import classes from './link.module.scss';

const LinkHome = (props) => {
  const { text, href = 'default' } = props;
  return (
    <Link className={classes.Link} to={href}>
      <button className={classes.Btn}>{text}</button>
    </Link>
  );
};

export default LinkHome;
