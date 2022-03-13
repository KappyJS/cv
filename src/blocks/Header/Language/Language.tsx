import React from 'react';
import classes from './Language.module.css';

const Language = () => (
  <div className={classes.wrapper}>
    <span className={classes.itemActive}>RU</span>
    <span className={classes.item}>EN</span>
  </div>
);

export default Language;
