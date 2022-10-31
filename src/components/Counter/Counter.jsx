import React from 'react';

import classes from './Counter.module.scss';

const Counter = ({ item, deleteItem, decItem, incItem }) => {
  const removeItem = () => {
    if (+item.count === 1) {
      deleteItem(item.id);
    } else {
      decItem(item.id);
    }
  };

  return (
    <div className={classes.counter}>
      <button
        onClick={() => removeItem()}
        className={classes.counterBtn}
      ></button>
      <span className={classes.number}>{item.count}</span>
      <button onClick={() => incItem(item.id)} className={classes.counterBtn}></button>
    </div>
  );
};

export default Counter;
