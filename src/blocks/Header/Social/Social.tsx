import React from 'react';
import { GithubIcon, MailIcon, TelegramIcon } from './assets';
import classes from './Social.module.css';
import { Link } from '../../../components';
import { SocialLinks } from '../../../constants';

const Social = () => (
  <div className={classes.wrapper}>
    <Link href={SocialLinks.Github}><img src={GithubIcon} alt="Github" /></Link>
    <Link href={SocialLinks.Telegram}><img src={TelegramIcon} alt="Telegram" /></Link>
    <Link href={SocialLinks.Mail}><img src={MailIcon} alt="Mail" /></Link>
  </div>
);

export default Social;
