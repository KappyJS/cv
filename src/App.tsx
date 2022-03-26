import React, { useMemo, useState } from 'react';
import {
  AboutMe, Avatar, Contacts, Experience, Header, Preferences, Skills,
} from './blocks';
import classes from './App.module.css';
import { ASSETS } from './assets';
import { AppContext } from './context';
import { getAppLocale } from './utils';

const App = () => {
  const [lang, setLang] = useState(getAppLocale());

  const ctxValue = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <AppContext.Provider value={ctxValue}>
      <div
        className={classes.wrapper}
        style={{ backgroundImage: `url(${ASSETS.BACKGROUND_URL})`, backgroundSize: 'contain' }}
      >
        <Header />
        <Avatar />
        <AboutMe />
        <Skills />
        <Experience />
        <Preferences />
        <Contacts />
      </div>
    </AppContext.Provider>
  );
};

export default App;
