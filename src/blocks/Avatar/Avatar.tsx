import React, { FC } from 'react';
import classes from './Avatar.module.css';
import { ASSETS } from '../../assets';

const Avatar:FC = () => (
  <div className={classes.wrapper}>
    <span className={classes.title}>Капитанов Николай</span>
    <span className={classes.subTitle}>Senior Front end разработчик</span>
    <img src={ASSETS.AVATAR_URL} className={classes.image} alt="Developer avatar here" />
  </div>
);

export default Avatar;
