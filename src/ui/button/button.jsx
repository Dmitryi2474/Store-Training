import React from "react";
import { Link } from "react-router-dom";
import classes from "./button.module.scss";

const Button = (props) => {
  const { type, text, href = "default" } = props;
  return (
    <button className={classes.button} type={type}>
      <Link to={href}>
        <span className={classes.text}>{text}</span>
      </Link>
    </button>
  );
};

export default Button;
