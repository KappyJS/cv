import React, { FC } from 'react';
import Card from './Card';
import classes from './Preferences.module.css';
import {
  growth, preferences, processes, quality,
} from './assets';

const Preferences:FC = () => (
  <div className={classes.wrapper}>
    <span className={classes.title}> Что для меня важно в этой компании</span>
    <div className={classes.cards}>
      <Card title="Развитие" description="Использование новых инструментов" imgSrc={growth} />
      <Card title="Процессы" description="Выстроеные процессы разработки, либо есть возможность их выстроить" imgSrc={processes} />
      <Card title="Качество" description="Заинтересованость в качестве своего продукта" imgSrc={quality} />
      <Card title="Специфика" description="Преимущественно интернациональная компания" imgSrc={preferences} />
    </div>
  </div>
);

export default Preferences;
