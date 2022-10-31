import React, { useEffect, useState } from 'react';

import Popup from '../Popup/Popup';
import classes from './Product.module.scss';
import ButtonAdd from '../ui/buttonAdd/buttonAdd';

const Product = ({ items, currentCategory }) => {
  const [cart, setCart] = useState(null);
  const [productList, setProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
      const items = JSON.parse(localStorage.getItem('Cart'));
      setCart(items ? items : []);
  }, []);

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
    let CART = localStorage.getItem('Cart') || '[]';
    CART = JSON.parse(CART);

    let newCart;
    newCart = [...CART, item];

    localStorage.setItem('Cart', JSON.stringify(newCart));
    setCart(newCart);

    return newCart;
  };

  useEffect(() => {
    setProductList(items);
    categoryHandler(currentCategory);
  }, [currentCategory]);

  return (
    <section className={classes.Product}>
      <ul className={classes.List}>
        {productList
          ? productList.map((item) => {
              return (
                <li className={classes.Item} key={item.id}>
                  <div className={classes.ImgWrapper}>
                  <ul className={classes.ListHover}>
                    <h2 className={classes.Header}>{item.model}</h2>
                    <li className={classes.ItemHover}>
                      <span>PRODUCTION YEAR : {item.specification.year}</span>
                    </li>
                    <li className={classes.ItemHover}>
                      <span>RAM : {item.specification.ram}</span>
                    </li>
                    <li className={classes.ItemHover}>
                      <span>MEMORY : {item.specification.memory}</span>
                    </li>
                    <li className={classes.ItemHover}>
                      <span>DISPLAY : {item.specification.display}</span>
                    </li>
                    <li className={classes.ItemHover}>
                      <span>OC : {item.specification.oc}</span>
                    </li>
                    <li className={classes.ItemHover}>
                      <span>NFC : {item.specification.nfc}</span>
                    </li>
                  </ul>
                    <button onClick={() => clickHandler(item)}>
                      <img
                        className={classes.Img}
                        src={item.imgSrc}
                        alt=""
                      ></img>
                    </button>
                  </div>
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
                      id={item.id}
                      cart={cart}
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
    </section>
  );
};

export default Product;
