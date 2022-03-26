import React, { FC, useCallback } from 'react';
import { useContext } from '../../../../context';
import classes from './Item.module.css';
import { Lang } from '../../../../models';

interface IProps {
    value:Lang;
}

const Item:FC<IProps> = (props) => {
  const { value } = props;
  const { lang, setLang } = useContext();

  const isActive = lang === value;

  const handleClick = useCallback(() => {
    setLang(value);
  }, [value]);

  return <span className={isActive ? classes.active : classes.item} onClick={handleClick}>{value.toUpperCase()}</span>;
};

export default Item;
