import React, { FC } from 'react';
import Language from './Language';
import Social from './Social';
import Logo from './Logo';
import classes from './Header.module.css';

const Header:FC = () => (
  <div className={classes.wrapper}>
    <Logo />
    <Social />
    <Language />
  </div>
);

export default Header;
