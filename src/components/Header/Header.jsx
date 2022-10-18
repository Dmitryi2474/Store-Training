import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../ui/button/button';
import Logo from '../ui/Logo/logo';
import classes from './Header.module.scss';

const Header = (active) => {
  return (
    <div className={classes.header}>
      <div className={classes.nav_block}>
        <Link
          to="/"
          className={
            active ? `${classes.Logo} ${classes.Active}` : classes.Logo
          }
        >
          <Logo />
        </Link>
        <Button href={'/cart'} text="Basket" />
      </div>
    </div>
  );
};

export default Header;
