import React from 'react';
import classes from './Language.module.css';
import Item from './Item';
import { Lang } from '../../../models';

const Language = () => (
  <div className={classes.wrapper}>
    {Object.values(Lang).map((value) => <Item key={value} value={value} />)}
  </div>
);

export default Language;
