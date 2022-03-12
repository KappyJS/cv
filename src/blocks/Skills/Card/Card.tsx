import React, { FC } from 'react';
import { Card as UICard, Tag } from '../../../components';
import classes from './Card.module.css';

interface IProps{
    title:string;
    items: string[]
}

const Card:FC<IProps> = (props) => {
  const { title, items } = props;

  return (
    <UICard className={classes.wrapper}>
      <span className={classes.title}>{title}</span>
      <div className={classes.tags}>{items.map((item) => <Tag>{item}</Tag>)}</div>
    </UICard>
  );
};

export default Card;
