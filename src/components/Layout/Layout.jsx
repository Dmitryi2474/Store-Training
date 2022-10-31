import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
