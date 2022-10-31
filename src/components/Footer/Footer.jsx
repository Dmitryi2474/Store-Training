import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={classes.Footer}>
      <div className={classes.Wrapper}>
      <div className={classes.Loader}></div>
        <img className={classes.Img} src="../../../img/Footer/IPhone.png" />
        <button className={classes.BtnUp}>
          <a href="#part1">UP</a>
        </button>
      </div>
    </section>
  );
};

export default Footer;
