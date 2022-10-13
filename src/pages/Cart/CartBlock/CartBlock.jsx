import React, { useContext } from "react";
import Counter from "../../../components/Counter/Counter";
import CartContext from "../../../context/CartContext";
import DeleteProduct from "../../../ui/button-delete/button";
import classes from "./CartBlock.module.scss";

const CartBlock = () => {
  const { cart, setCart } = useContext(CartContext);
  
  const removeHandler = (current) => {
    setCart(prev => {
      return {
        cartItems: [...prev.cartItems.filter(item => item.id !== current.id)],
        total: cart.total - current.specification.price * current.currentCount
      }
    })
  };

  return (
    <div className={classes.cart}>
      <ul className={classes.list}>
        {cart.cartItems.length !== 0 ?
          cart.cartItems.map((item) => {
              return (
                <li className={classes.item} key={item.id}>
                  <div className={classes.content}>
                    <img className={classes.img} src={item.imgSrc} alt=""></img>
                    <span className={classes.text}>{item.model}</span>
                    <span>${item.specification.price}</span>
                  </div>
                  <Counter item={item} />
                  <DeleteProduct clickHandler={() => removeHandler(item)} />
                </li>
              );
            })
          : <div>Cart empry.</div>}
      </ul>
      <span className={classes.Price}>Total Price: ${cart.total}</span>
    </div>
  );
};

export default CartBlock;
