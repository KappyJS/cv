import React from 'react';
import {
  AboutMe, Avatar, Contacts, Experience, Preferences, Skills,
} from './blocks';
import classes from './App.module.css';

const App = () => (
  <div className={classes.wrapper}>
    <Avatar />
    <AboutMe />
    <Skills />
    <Experience />
    <Preferences />
    <Contacts />
  </div>
);

export default App;
