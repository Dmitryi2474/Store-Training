import React, { useContext, useEffect, useState } from 'react';
import Counter from '../../../components/Counter/Counter';

import CartEmpty from '../CartEmpty/CartEmpty';
import classes from './CartBlock.module.scss';

const CartBlock = () => {
  const [cartBlock, setCartBlock] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Cart'));
    setCartBlock(items ? items : []);
  }, []);

  useEffect(() => {
    let total = 0;
    cartBlock.forEach((item) => (total += item.specification.price * +item.count));
    setTotalPrice(total);
  }, [cartBlock]);

  const deleteItem = (id) => {
    let newCartBlock = [...cartBlock];
    newCartBlock = newCartBlock.filter((item) => item.id !== id);

    localStorage.setItem('Cart', JSON.stringify(newCartBlock));
    setCartBlock(newCartBlock);
  };

  const decItem = (id) => {
    let newCartBlock = [...cartBlock];
    const currentItem = newCartBlock.find((item) => item.id === id);
    currentItem.count = +currentItem.count - 1;

    localStorage.setItem('Cart', JSON.stringify(newCartBlock));
    setCartBlock(newCartBlock);
  };

  const incItem = (id) => {
    let newCartBlock = [...cartBlock];
    const currentItem = newCartBlock.find((item) => item.id === id);

    if (currentItem.count < 5) {
      currentItem.count = +currentItem.count + 1;
    }

    localStorage.setItem('Cart', JSON.stringify(newCartBlock));
    setCartBlock(newCartBlock);
  };

  return (
    <div className={classes.cart}>
      <ul className={classes.list}>
        {cartBlock.length ? (
          cartBlock.map((item) => {
            return (
              <li className={classes.item} key={item.id}>
                <div className={classes.content}>
                  <img className={classes.img} src={item.imgSrc} alt=""></img>
                  <span className={classes.text}>{item.model}</span>
                </div>
                <Counter
                  item={item}
                  deleteItem={deleteItem}
                  decItem={decItem}
                  incItem={incItem}
                />
                <span>${item.specification.price}</span>
                <button
                  onClick={() => deleteItem(item.id)}
                  className={classes.Delete}
                ></button>
              </li>
            );
          })
        ) : (
          <CartEmpty />
        )}
      </ul>
      {!!totalPrice && (
        <span className={classes.Price}>Total Price: ${totalPrice}</span>
      )}
    </div>
  );
};

export default CartBlock;
