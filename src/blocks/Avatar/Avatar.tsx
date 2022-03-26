import React, { FC } from 'react';
import classes from './Avatar.module.css';
import { ASSETS } from '../../assets';
import { Typography } from '../../components';
import { Lang } from '../../models';

const Avatar:FC = () => (
  <div className={classes.wrapper}>
    <Typography value={{ [Lang.ru]: 'Капитанов Николай', [Lang.en]: 'Kapitanov Nikolay' }} variant="h1" />
    <Typography value={{ [Lang.ru]: 'Senior Front end разработчик', [Lang.en]: 'Senior Front end developer' }} variant="subtitle2" className={classes.subTitle} />
    <img src={ASSETS.AVATAR_URL} className={classes.image} alt="Developer avatar here" />
  </div>
);

export default Avatar;
