import React, { FC } from 'react';
import classes from './Contacts.module.css';
import { Link } from '../../components';
import { SocialLinks } from '../../constants';
import { GithubWhiteIcon, MailWhiteIcon, TelegramWhiteIcon } from './assets';

const Contacts:FC = () => (
  <div className={classes.wrapper}>

    <div className={classes.title}>Контакты</div>
    <div className={classes.social}>
      <Link className={classes.socialItem} href={SocialLinks.Github}>
        <img src={GithubWhiteIcon} alt="Github" />
        <span>{SocialLinks.Github}</span>
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
