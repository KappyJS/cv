import React, { FC } from 'react';
import { Card as UiCard, Typography } from '../../../components';
import classes from './Card.module.css';
import { TLangRecord } from '../../../models';

interface IProps {
    title:TLangRecord;
    description:TLangRecord;
    imgSrc:string;
}

const Card :FC<IProps> = (props) => {
  const { title, description, imgSrc } = props;

  return (
    <UiCard className={classes.wrapper}>
      <img src={imgSrc} className={classes.img} alt="src" />
      <Typography className={classes.title} value={title} variant="subtitle2" />
      <Typography className={classes.description} value={description} variant="b2" />
    </UiCard>
  );
};

export default Card;
