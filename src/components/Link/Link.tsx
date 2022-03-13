import React, { FC } from 'react';

interface IProps {
    href:string;
    className?:string;
}

const Link:FC<IProps> = ({ href, children, className }) => <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;

export default Link;
