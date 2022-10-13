import React from "react";
import Header from "../Header/Header";

const Layout = ({children}) => {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
