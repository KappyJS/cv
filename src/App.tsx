import React from 'react';
import {
  AboutMe, Avatar, Contacts, Experience, Preferences, Skills, Header,
} from './blocks';
import classes from './App.module.css';

const App = () => (
  <div className={classes.wrapper}>
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
