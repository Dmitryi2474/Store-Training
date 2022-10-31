import React, { useState } from 'react';
import classes from './buttonAdd.module.scss';

const ButtonAdd = (props) => {
  const { text, id, cart, clickHandler } = props;
  const [isAdded, setIsAdded] = useState(!!cart.find(item => item.id === id));

  const onClickPlus = () => {
    const localCart = clickHandler();
    setIsAdded(!!localCart.find(item => item.id === id));
  };

  return (
    <button
      className={isAdded ? `${classes.Checked}` : classes.ButtonAdd}
      onClick={onClickPlus}
      disabled={isAdded}
    >
      <div className={classes.Link}>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default ButtonAdd;
