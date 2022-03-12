import React, { FC } from 'react';
import { Card as UiCard } from '../../../components';
import classes from './Card.module.css';

interface IProps {
    title?:string;
    description?:string;
}

const Card :FC<IProps> = (props) => {
  const { title, description } = props;

  return (
    <UiCard className={classes.wrapper}>
      <span className={classes.img}>svg</span>
      <span className={classes.title}>{title}</span>
      <span className={classes.description}>{description}</span>
    </UiCard>
  );
};

export default Card;
