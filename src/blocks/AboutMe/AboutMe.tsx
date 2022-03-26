import React, { FC } from 'react';
import classes from './AboutMe.module.css';
import { Typography } from '../../components';
import { Lang } from '../../models';

const AboutMe:FC = () => (
  <div className={classes.wrapper}>
    <Typography value={{ [Lang.ru]: 'Мои достижения', [Lang.en]: 'My achievements' }} variant="h2" />
    <Typography
      className={classes.description}
      value={{
        [Lang.ru]: 'Более 3 лет занимаюсь front-end разработкой. Прошел путь от начинающего разработчика до наставника и лидера команды. Слежу за чистотой своего кода, всегда ориентируюсь на масштабируемость проектов. Я считаю, что позитивный настрой команды - один из главных составляющих конечного продукта.',
        [Lang.en]: 'I\'ve been doing front-end development for over 3 years. I have gone from a novice developer to a mentor and team leader. I keep my code clean, I always focus on the scalability of projects. I believe that the positive attitude of the team is one of the main components of the final product.',
      }}
      variant="b1"
    />
    <Typography
      value={{
        [Lang.ru]: 'P.S. Если хотите скачать резюме, нажмите на кнопку ниже',
        [Lang.en]:
        'P.S. If you would like to download your CV, please click the button below.',
      }}
      variant="b1"
      className={classes.subDescription}
    />
    <button type="button" className={classes.button}>
      <Typography
        value={{
          [Lang.ru]: 'Скачать',
          [Lang.en]:
                'Download',
        }}
        variant="button"
      />
    </button>
  </div>
);

export default AboutMe;
