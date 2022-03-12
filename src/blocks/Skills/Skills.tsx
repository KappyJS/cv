import React, { FC } from 'react';
import classes from './Skills.module.css';
import { Card } from './Card';
import { SKILLS_CLASSIFIER } from './constants';

const { MAIN_SKILLS_LIST, LIBRARIES_SKILLS_LIST, OTHER_SKILLS_LIST } = SKILLS_CLASSIFIER;

const Skills:FC = () => (
  <div className={classes.wrapper}>
    <span className={classes.title}>Ключевые навыки</span>
    <div className={classes.cards}>
      <Card title="Основные" items={MAIN_SKILLS_LIST} />
      <Card title="Библиотеки" items={LIBRARIES_SKILLS_LIST} />
      <Card title="Прочие" items={OTHER_SKILLS_LIST} />
    </div>
  </div>
);

export default Skills;
