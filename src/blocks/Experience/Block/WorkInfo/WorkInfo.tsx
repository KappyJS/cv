import React, { FC } from 'react';
import classes from './WorkInfo.module.css';

interface IProps{
    companyName:string;
    grade:string;
    startDate:string;
    endDate:string
}

const WorkInfo:FC<IProps> = (props) => {
  const {
    companyName, grade, startDate, endDate,
  } = props;
  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>
        {[companyName, grade].join(' - ')}
      </span>
      <span className={classes.subTitle}>
        {[startDate, endDate].join(' - ')}
      </span>
    </div>
  );
};

export default WorkInfo;
