import React, { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

import classes from './Counter.module.scss';

const Counter = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  let index = cart.cartItems.findIndex((current) => current.id === item.id);

  const onClickPlus = () => {
    if (item.currentCount < item.count) {
      setCart({
        cartItems: [
          ...cart.cartItems.slice(0, index),
          { ...item, currentCount: cart.cartItems[index].currentCount + 1 },
          ...cart.cartItems.slice(index + 1, cart.cartItems.length),
        ],
        total: cart.total + item.specification.price,
      });
    }
  };

  const onClickMinus = () => {
    if (item.currentCount === 1) {
      setCart((prev) => {
        return {
          cartItems: [
            ...prev.cartItems.filter((current) => current.id !== item.id),
          ],
          total: cart.total - item.specification.price,
        };
      });
    } else {
      setCart({
        cartItems: [
          ...cart.cartItems.slice(0, index),
          { ...item, currentCount: cart.cartItems[index].currentCount - 1 },
          ...cart.cartItems.slice(index + 1, cart.cartItems.length),
        ],
        total: cart.total - item.specification.price,
      });
    }
  };

  return (
    <div className={classes.counter}>
      <button onClick={onClickMinus} className={classes.counterBtn}></button>
      <span className={classes.number}>{item.currentCount}</span>
      <button onClick={onClickPlus} className={classes.counterBtn}></button>
    </div>
  );
};

export default Counter;
