import React from 'react';
import { Link } from 'react-router-dom';

const sideMenuItemRoute = ({
    item,
    curLevel,
    activateMe
}) => (
    <Link className={'item-route '+curLevel} key={item.id} to={item.path} onClick={activateMe}>{item.label}</Link>
);

export default sideMenuItemRoute;