import React, { useState } from "react";
import classes from "./button.module.scss";

const DeleteProduct = ({clickHandler}) => {
  return (
    <button className={classes.unistall}>
      <div onClick={clickHandler}>X</div>
    </button>
  );
};

export default DeleteProduct;
