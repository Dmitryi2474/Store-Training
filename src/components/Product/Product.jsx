import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

import Popup from '../Popup/Popup';
import classes from './Product.module.scss';
import ButtonAdd from '../ui/buttonAdd/buttonAdd';

const Product = ({ items, currentCategory }) => {
  const [productList, setProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [popupActive, setPopupActive] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const clickHandler = (index) => {
    setPopupActive(true);
    setCurrentProduct(index);
  };

  const categoryHandler = (currentCategory) => {
    if (currentCategory === 'All') {
      setProductList(items);
    } else {
      setProductList(items.filter((item) => item.category === currentCategory));
    }
  };

  const addHandler = (item) => {
    let newCart;

    if (cart.cartItems.find((current) => current.id === item.id)) {
      let index = cart.cartItems.findIndex((current) => current.id === item.id);

      if (cart.cartItems[index].currentCount === item.count) {
        return;
      }

      if (index === 0) {
        newCart = {
          cartItems: [
            { ...item, currentCount: cart.cartItems[index].currentCount + 1 },
            ...cart.cartItems.slice(1, cart.cartItems.length),
          ],
          total: cart.total + item.specification.price,
        };
      } else if (index === cart.cartItems.length - 1) {
        newCart = {
          cartItems: [
            ...cart.cartItems.slice(0, index),
            { ...item, currentCount: cart.cartItems[index].currentCount + 1 },
          ],
          total: cart.total + item.specification.price,
        };
      } else {
        newCart = {
          cartItems: [
            ...cart.cartItems.slice(0, index),
            { ...item, currentCount: cart.cartItems[index].currentCount + 1 },
            ...cart.cartItems.slice(index + 1, cart.cartItems.length),
          ],
          total: cart.total + item.specification.price,
        };
      }
    } else {
      newCart = {
        cartItems: [...cart.cartItems, { ...item, currentCount: 1 }],
        total: cart.total + item.specification.price,
      };
    }
    setCart(newCart);
  };

  useEffect(() => {
    setProductList(items);
    categoryHandler(currentCategory);
  }, [currentCategory]);

  return (
    <div className={classes.Product}>
      <ul className={classes.List}>
        {productList
          ? productList.map((item) => {
              return (
                <li className={classes.Item} key={item.id}>
                  <button onClick={() => clickHandler(item)}>
                    <img className={classes.Img} src={item.imgSrc} alt=""></img>
                  </button>
                  <div className={classes.Add}>
                    <span
                      onClick={() => clickHandler(item)}
                      className={classes.Text}
                    >
                      {item.model}
                    </span>
                    <ButtonAdd
                      clickHandler={() => addHandler(item)}
                      text="+ Add"
                    />
                  </div>
                </li>
              );
            })
          : null}
      </ul>

      <div className={classes.PopupProduct}>
        {popupActive ? (
          <Popup active={popupActive} setActive={setPopupActive}>
            <img
              className={classes.PopupImg}
              src={currentProduct.imgSrc}
              alt=""
            />
            <ul className={classes.PopupList}>
              <li className={classes.PopupItem}>
                <span>MODEL :{currentProduct.specification.model}</span>
              </li>
              <li className={classes.PopupItem}>
                <span>
                  PRODUCTION YEAR : {currentProduct.specification.year}
                </span>
              </li>
              <li className={classes.PopupItem}>
                <span>RAM : {currentProduct.specification.ram}</span>
              </li>
              <li className={classes.PopupItem}>
                <span>MEMORY : {currentProduct.specification.memory}</span>
              </li>
              <li className={classes.PopupItem}>
                <span>DISPLAY : {currentProduct.specification.display}</span>
              </li>
              <li className={classes.PopupItem}>
                <span>OC : {currentProduct.specification.oc}</span>
              </li>
              <li className={classes.PopupItem}>
                <span>NFC : {currentProduct.specification.nfc}</span>
              </li>
            </ul>
          </Popup>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
