import React, { FC } from 'react';
import classes from './Avatar.module.css';

const Avatar:FC = () => (
  <div className={classes.wrapper}>
    <span className={classes.title}>Капитанов Николай</span>
    <span className={classes.subTitle}>Senior Front end разработчик</span>
  </div>
);

export default Avatar;
