import React from 'react';
import {
  AboutMe, Avatar, Contacts, Experience, Preferences, Skills, Header,
} from './blocks';
import classes from './App.module.css';
import { ASSETS } from './assets';

const App = () => (
  <div className={classes.wrapper} style={{ backgroundImage: `url(${ASSETS.BACKGROUND_URL})`, backgroundSize: 'contain' }}>
    <Header />
    <Avatar />
    <AboutMe />
    <Skills />
    <Experience />
    <Preferences />
    <Contacts />
  </div>
);

export default App;
