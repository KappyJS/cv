import React, { FC } from 'react';
import { Block } from './Block';
import classes from './Experience.module.css';
import { Typography } from '../../components';
import { Lang } from '../../models';

const Experience:FC = () => (
  <div className={classes.wrapper}>
    <Typography className={classes.title} value={{ [Lang.ru]: 'Опыт работы', [Lang.en]: 'Experience' }} variant="h2" />
    <div><Block /></div>
  </div>
);

export default Experience;
