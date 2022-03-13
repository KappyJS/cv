import React, { FC } from 'react';
import { IExperience } from '../../models';
import { List } from './List';
import classes from './Description.module.css';

const Description:FC<Pick<IExperience, 'achievements' | 'duties'>> = (props) => {
  const { achievements, duties } = props;
  return (
    <div className={classes.wrapper}>
      <List title="Обязанности" items={duties} />
      <List title="Ключевые достижения" items={achievements} />
    </div>
  );
};

export default Description;
