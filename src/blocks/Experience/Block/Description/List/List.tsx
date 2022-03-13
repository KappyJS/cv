import React, { FC } from 'react';
import classes from './List.module.css';
import { Item } from './Item';

interface IProps{
    title:string;
    items:string[]
}

const List:FC<IProps> = (props) => {
  const { title, items } = props;
  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>{title}</span>
      <div className={classes.list}>{items.map((item) => <Item key={item}>{item}</Item>)}</div>
    </div>
  );
};

export default List;
