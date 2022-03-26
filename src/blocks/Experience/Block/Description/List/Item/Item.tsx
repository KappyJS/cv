import React, { FC } from 'react';
import { ListImage } from './assets';
import classes from './Item.module.css';
import { TLangRecord } from '../../../../../../models';
import { Typography } from '../../../../../../components';

interface IProps{
    value:TLangRecord;
}

const Item:FC<IProps> = ({ value }) => (
  <div className={classes.wrapper}>
    <img className={classes.icon} src={ListImage} alt="list" />
    <Typography value={value} variant="b2" />
  </div>
);

export default Item;
