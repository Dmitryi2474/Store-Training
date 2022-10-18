import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import CartContext from '../context/CartContext';

import './App.scss';

const App = () => {
  const [cart, setCart] = useState({
    cartItems: [],
    total: 0,
  });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </CartContext.Provider>
  );
};

export default App;
