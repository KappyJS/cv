import React, { FC } from 'react';
import classes from './AboutMe.module.css';

const AboutMe:FC = () => (
  <div className={classes.wrapper}>
    <span className={classes.title}>Мои достижения</span>
    <span className={classes.description}>
      Более 3 лет занимаюсь front-end разработкой. Прошел путь от начинающего разработчика
      до наставника и лидера команды. Слежу за чистотой своего кода, всегда ориентируюсь
      на масштабируемость проектов. Я считаю, что позитивный настрой команды - один из главных составляющих конечного продукта.
    </span>
    <span className={classes.subDescription}>P.S. Если хотите скачать резюме, нажмите на кнопку ниже</span>
    <button type="button" className={classes.button}>Скачать</button>
  </div>
);

export default AboutMe;
