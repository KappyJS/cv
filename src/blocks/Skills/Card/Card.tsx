import React, { FC } from 'react';
import { Card as UICard, Tag, Typography } from '../../../components';
import classes from './Card.module.css';
import { TLangRecord } from '../../../models';

interface IProps{
    title:TLangRecord;
    items: string[]
}

const Card:FC<IProps> = (props) => {
  const { title, items } = props;

  return (
    <UICard className={classes.wrapper}>
      <Typography value={title} variant="subtitle2" />
      <div className={classes.tags}>{items.map((item) => <Tag key={item}>{item}</Tag>)}</div>
    </UICard>
  );
};

export default Card;
