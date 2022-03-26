import React, { FC } from 'react';
import Card from './Card';
import classes from './Preferences.module.css';
import {
  growth, preferences, processes, quality,
} from './assets';
import { Lang } from '../../models';
import { Typography } from '../../components';

const Preferences:FC = () => (
  <div className={classes.wrapper}>
    <Typography value={{ [Lang.ru]: 'Что для меня важно в этой компании', [Lang.en]: 'What is important to me in a company' }} variant="h2" className={classes.title} />
    <div className={classes.cards}>
      <Card title={{ [Lang.ru]: 'Развитие', [Lang.en]: 'Growth' }} description={{ [Lang.ru]: 'Использование новых инструментов', [Lang.en]: 'Using new tools' }} imgSrc={growth} />
      <Card title={{ [Lang.ru]: 'Процессы', [Lang.en]: 'Processes' }} description={{ [Lang.ru]: 'Выстроенные процессы разработки', [Lang.en]: 'Built-in development processes' }} imgSrc={processes} />
      <Card title={{ [Lang.ru]: 'Качество', [Lang.en]: 'Quality' }} description={{ [Lang.ru]: 'Использование новых инструментов', [Lang.en]: 'Using new tools' }} imgSrc={quality} />
      <Card title={{ [Lang.ru]: 'Локализация', [Lang.en]: 'Localization' }} description={{ [Lang.ru]: 'Преимущественно интернациональная компания', [Lang.en]: 'Predominantly international company' }} imgSrc={preferences} />
    </div>
  </div>
);

export default Preferences;
