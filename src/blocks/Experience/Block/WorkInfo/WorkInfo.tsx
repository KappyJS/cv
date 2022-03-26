import React, { FC } from 'react';
import classes from './WorkInfo.module.css';
import { Lang, TLangRecord } from '../../../../models';
import { Typography } from '../../../../components';

interface IProps{
    companyName:TLangRecord;
    grade:TLangRecord;
    startDate:Date;
    endDate:Date
}

const options:Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };

const langToDateLocale = {
  [Lang.ru]: 'ru-RU',
  [Lang.en]: 'en-EN',
};

function capitalizeFirstLetter(value:string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const dateToLangRecord = (date?:Date) => {
  if (!date) {
    return { [Lang.ru]: 'По настоящее время', [Lang.en]: 'Until now' };
  }

  return {
    [Lang.ru]: capitalizeFirstLetter(date.toLocaleDateString(langToDateLocale[Lang.ru], options)),
    [Lang.en]: date.toLocaleDateString(langToDateLocale[Lang.en], options),
  };
};

const WorkInfo:FC<IProps> = (props) => {
  const {
    companyName, grade, startDate, endDate,
  } = props;

  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>
        <Typography value={companyName} variant="subtitle2" />
        {' - '}
        <Typography value={grade} variant="subtitle2" />
      </span>
      <span>
        <Typography value={{ [Lang.en]: dateToLangRecord(startDate)[Lang.en], [Lang.ru]: dateToLangRecord(startDate)[Lang.ru] }} variant="b2" />
        {' - '}
        <Typography value={{ [Lang.en]: dateToLangRecord(endDate)[Lang.en], [Lang.ru]: dateToLangRecord(endDate)[Lang.ru] }} variant="b2" />
      </span>
    </div>
  );
};

export default WorkInfo;
