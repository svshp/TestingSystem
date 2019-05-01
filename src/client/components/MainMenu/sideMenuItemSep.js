import React from 'react';

const sideMenuItemSep = ({
    item,
    curLevel
}) => (
    <div className={'item-separator '+curLevel} key={item.id}></div>
);

export default sideMenuItemSep;