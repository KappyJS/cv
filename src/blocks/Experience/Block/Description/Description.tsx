import React, { FC } from 'react';
import { IExperience } from '../../models';
import { List } from './List';
import classes from './Description.module.css';
import { Lang } from '../../../../models';

const Description:FC<Pick<IExperience, 'achievements' | 'duties'>> = (props) => {
  const { achievements, duties } = props;
  return (
    <div className={classes.wrapper}>
      <List title={{ [Lang.ru]: 'Обязанности', [Lang.en]: 'Duties' }} items={duties} />
      <List title={{ [Lang.ru]: 'Ключевые достижения', [Lang.en]: 'Main achievements' }} items={achievements} />
    </div>
  );
};

export default Description;
