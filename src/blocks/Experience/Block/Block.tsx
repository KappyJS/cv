import React, { FC } from 'react';
import { Description } from './Description';
import { EXPERIENCE_DETAILS } from '../constanst';
import { WorkInfo } from './WorkInfo';
import classes from './Block.module.css';
import { Lang } from '../../../models';

const Block:FC = () => (
  <div className={classes.wrapper}>
    {EXPERIENCE_DETAILS.map(({
      duties, grade, company, startDate, endDate, achievements,
    }) => (
      <div key={grade[Lang.en]} className={classes.grid}>
        <WorkInfo companyName={company} grade={grade} startDate={startDate} endDate={endDate} />
        <Description duties={duties} achievements={achievements} />
      </div>
    ))}

  </div>
);

export default Block;
