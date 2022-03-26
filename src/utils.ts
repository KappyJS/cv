import { Lang } from './models';

export const getAppLocale = () => {
  const { language } = navigator;
  return language === 'ru-RU' ? Lang.ru : Lang.en;
};
