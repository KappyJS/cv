import React, { FC } from 'react';
import { Block } from './Block';
import classes from './Experience.module.css';

const Experience:FC = () => (
  <div className={classes.wrapper}>
    <span className={classes.title}>Опыт работы</span>
    <div><Block /></div>
  </div>
);

export default Experience;
