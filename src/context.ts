import { createContext, useContext as useReactContext } from 'react';
import { Lang } from './models';
import { getAppLocale } from './utils';

export interface IContextState {
    lang:Lang,
    setLang:(lang:Lang)=>void
}

export const APP_CTX_INITIAL_STATE:IContextState = { lang: getAppLocale(), setLang: () => undefined };

export const AppContext = createContext<IContextState>(APP_CTX_INITIAL_STATE);

export const useContext = () => useReactContext(AppContext);
