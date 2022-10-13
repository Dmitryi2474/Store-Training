import React from "react";
import classes from "./Header.module.scss";
import Button from "../../ui/button/button";

const Header = () => {

  return (
    <div className={classes.header}>
      <nav className={classes.nav_block}>
        <Button href={"/cart"} text="Basket"/>
      </nav>
    </div>
  );
};

export default Header;
