import React from 'react';
import { TLangRecord } from '../../models';
import { useContext } from '../../context';
import classes from './classes.module.css';

type Variants = 'h1' | 'h2' | 'subtitle1'|'subtitle2'| 'b1'|'b2'| 'button';

interface IProps {
    value:TLangRecord;
    variant: Variants;
    className?:string;
}

const Typography:React.FC<IProps> = (props) => {
  const { variant, value, className } = props;

  const { lang } = useContext();

  return <span className={`${classes[variant]} ${className}`}>{value[lang]}</span>;
};

export default Typography;
