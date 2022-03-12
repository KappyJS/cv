import React, { FC } from 'react';
import classes from './Contacts.module.css';

const Contacts:FC = () => (
  <div className={classes.wrapper}>

    <div className={classes.title}>Контакты</div>
    <div className={classes.social}>
      <div className={classes.socialItem}>https://github.com/KappyJS</div>
      <div className={classes.socialItem}>@kappy_ts</div>
      <div className={classes.socialItem}>kappyts@gmail.com</div>
    </div>
  </div>
);

export default Contacts;
