import React, { FC } from 'react';
import classes from './Skills.module.css';
import { Card } from './Card';
import { SKILLS_CLASSIFIER } from './constants';
import { Lang } from '../../models';
import { Typography } from '../../components';

const { MAIN_SKILLS_LIST, LIBRARIES_SKILLS_LIST, OTHER_SKILLS_LIST } = SKILLS_CLASSIFIER;

const Skills:FC = () => (
  <div className={classes.wrapper}>
    <Typography className={classes.title} value={{ [Lang.ru]: 'Ключевые навыки', [Lang.en]: 'Key skills' }} variant="h2" />
    <div className={classes.cards}>
      <Card title={{ [Lang.ru]: 'Основные', [Lang.en]: 'Main' }} items={MAIN_SKILLS_LIST} />
      <Card title={{ [Lang.ru]: 'Библиотеки', [Lang.en]: 'Libraries' }} items={LIBRARIES_SKILLS_LIST} />
      <Card title={{ [Lang.ru]: 'Прочие', [Lang.en]: 'Others' }} items={OTHER_SKILLS_LIST} />
    </div>
  </div>
);

export default Skills;
