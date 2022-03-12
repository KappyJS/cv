import React, { FC } from 'react';
import classes from './Tag.module.css';

const Tag:FC = ({ children }) => (
  <span className={classes.wrapper}>{children}</span>
);

export default Tag;
