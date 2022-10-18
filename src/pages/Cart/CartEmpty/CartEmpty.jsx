import React from 'react';

import LinkHome from '../../../components/ui/Link/link';
import classes from './CartEmpty.module.scss';

const CartEmpty = () => {
  return (
    <div className={classes.CartEmty}>
      <div className={classes.ContentWrapper}>
        <div>
          <img src="/img/CartEmpty/basket.png" alt="" />
        </div>
        <div className={classes.TextWrapper}>
          <h1 className={classes.Title}>Your Cart is Empty</h1>
          <span className={classes.SubTitle}>
              <LinkHome href={'/'} text="go to our shop" /> and find what you’re
              looking for
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
