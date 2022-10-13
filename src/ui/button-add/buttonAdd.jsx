import React, { useState } from "react";
import classes from "./buttonAdd.module.scss";

const ButtonAdd = (props) => {
  const { type, text, clickHandler} = props;
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    clickHandler()
  };

  return (
    <button
      className={isAdded ? `${classes.Checked}` : classes.ButtonAdd}
      type={type}
      onClick={onClickPlus}
    >
      <div className={classes.Link}>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default ButtonAdd;
