import React from 'react';
import classes from './logo.module.scss'

const Logo = () => {
  return (
    <div className={classes.logoWrapper}>
      <picture>
        <source
          srcSet="/img/header/logo-desktop.png"
          media="(min-width: 768px)"
        ></source>
        <img src="/img/header/logo-mobile.png" alt="" />
      </picture>
      <span>Apple Store USA</span>
    </div>
  );
};

export default Logo;
