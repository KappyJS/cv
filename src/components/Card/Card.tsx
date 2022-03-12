import React, { FC } from 'react';
import classes from './Card.module.css';

interface IProps{
    className?:string;
}

const Card:FC<IProps> = ({ children, className }) => <div className={`${className} ${classes.wrapper}`}>{children}</div>;

export default Card;
