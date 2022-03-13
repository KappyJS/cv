import React, { FC } from 'react';
import { Card as UiCard } from '../../../components';
import classes from './Card.module.css';

interface IProps {
    title:string;
    description:string;
    imgSrc:string;
}

const Card :FC<IProps> = (props) => {
  const { title, description, imgSrc } = props;

  return (
    <UiCard className={classes.wrapper}>
      <img src={imgSrc} className={classes.img} alt="src" />
      <span className={classes.title}>{title}</span>
      <span className={classes.description}>{description}</span>
    </UiCard>
  );
};

export default Card;
