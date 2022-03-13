import React, { FC } from 'react';
import { ListImage } from './assets';
import classes from './Item.module.css';

const Item:FC = ({ children }) => (
  <div className={classes.wrapper}>
    <img src={ListImage} alt="list" />
    <span className={classes.item}>{children}</span>
  </div>
);

export default Item;
