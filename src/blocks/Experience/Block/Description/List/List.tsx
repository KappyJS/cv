import React, { FC } from 'react';
import classes from './List.module.css';
import { Item } from './Item';
import { TLangRecord } from '../../../../../models';
import { Typography } from '../../../../../components';

interface IProps{
    title:TLangRecord;
    items:TLangRecord[]
}

const List:FC<IProps> = (props) => {
  const { title, items } = props;
  return (
    <div className={classes.wrapper}>
      <Typography value={title} variant="subtitle2" />
      <div className={classes.list}>{items.map((item) => <Item key={item.en} value={item} />)}</div>
    </div>
  );
};

export default List;
