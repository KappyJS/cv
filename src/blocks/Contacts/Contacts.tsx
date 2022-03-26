import React, { FC } from 'react';
import classes from './Contacts.module.css';
import { Link, Typography } from '../../components';
import { SocialLinks } from '../../constants';
import { GithubWhiteIcon, MailWhiteIcon, TelegramWhiteIcon } from './assets';
import { Lang } from '../../models';

const Contacts:FC = () => (
  <div className={classes.wrapper}>
    <Typography value={{ [Lang.ru]: 'Контакты', [Lang.en]: 'Contacts' }} variant="h2" />
    <div className={classes.social}>
      <Link className={classes.socialItem} href={SocialLinks.Github}>
        <img src={GithubWhiteIcon} alt="Github" />
        <span>KappyJS</span>
      </Link>
      <Link className={classes.socialItem} href={SocialLinks.Telegram}>
        <img src={MailWhiteIcon} alt="Telegram" />
        <span>@kappy_ts</span>
      </Link>
      <Link className={classes.socialItem} href={SocialLinks.Mail}>
        <img src={TelegramWhiteIcon} alt="Mail" />
        <span>kappyts@gmail.com</span>
      </Link>
    </div>
  </div>
);

export default Contacts;
