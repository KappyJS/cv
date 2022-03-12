import React, { FC } from 'react';
import Card from './Card';
import classes from './Preferences.module.css';

const Preferences:FC = () => (
  <div className={classes.wrapper}>
    <span className={classes.title}> Что для меня важно в этой компании</span>
    <div className={classes.cards}>
      <Card title="Развитие" description="Использование новых инструментов" />
      <Card title="Процессы" description="Выстроеные процессы разработки, либо есть возможность их выстроить" />
      <Card title="Качество" description="Заинтересованость в качестве своего продукта" />
      <Card title="Специфика" description="Преимущественно интернациональная компания" />
    </div>
  </div>
);

export default Preferences;
