import React from 'react';

import classes from './Categories.module.scss';

const Categories = ({ currentCategory, setCurrentCategory }) => {
  const categories = ['All', 'Iphone 13', 'Iphone 13 Pro', 'Iphone 13 Pro Max'];

  return (
    <div className={classes.categories}>
      <ul className={classes.List}>
        {categories.map((categoryName, index) => (
          <li className={classes.Item} key={index}>
            <button
              className={
                currentCategory === categoryName
                  ? `${classes.Btn} ${classes.Active}`
                  : classes.Btn
              }
              onClick={() => setCurrentCategory(categoryName)}
            >
              <span> {categoryName}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
