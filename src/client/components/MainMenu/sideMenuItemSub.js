import React from 'react';

const sideMenuItemSub = ({
    item,
    curLevel,
    toggleSubMenu
}) => (
    <div className={'item-submenu '+curLevel} key={item.id} onClick={toggleSubMenu}>{item.label}<span></span></div>
);

export default sideMenuItemSub;