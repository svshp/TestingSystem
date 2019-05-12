import React from 'react';

const sideMenuItemLink = ({
    item,
    curLevel
}) => (
    <a className={'item-link '+curLevel} key={item.id} href={item.path} target='_blank' rel='nofollow noopener noreferrer'>{item.label}</a>
);

export default sideMenuItemLink;