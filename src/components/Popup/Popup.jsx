import React from "react";
import classes from "./Popup.module.scss";

const Popup = ({ active, setActive, children }) => {
  return (
    <div className={active ? `${classes.Popup} ${classes.Active}` : classes.Popup} onClick={() => setActive(false)}>
      <div className={classes.Content} onClick={e => e.stopPropagation()}>
        <div className={classes.Close} onClick={() => setActive(false)}>X</div>
				{children}
			</div>
    </div>
  )
};

export default Popup;
