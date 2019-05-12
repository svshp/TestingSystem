import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideMenuItemRoute from './sideMenuItemRoute';
import SideMenuItemLink from './sideMenuItemLink';
import SideMenuItemSub from './sideMenuItemSub';
import SideMenuItemSep from './sideMenuItemSep';

import SideMenuContainer from './sideMenuContainer';
import {
    actionActivateLink,
    actionChangeSubMenuVisibility
} from '../../store/actions/actionsListMenu';

import './sideMenuItem.scss';

let traceMenu = [];

class SideMenuItem extends Component {
    render() {
        const {
            item,
            index
        } = this.props;

        let curItem, curLevel;

        curLevel = item.level ? 'level-menu-' + item.level : '';

        if (item.type === 'route') {
            curItem = <SideMenuItemRoute
                item={item}
                curLevel={curLevel}
                activateMe={this.props.activateMe}
            />
        } else if (item.type === 'link') {
            curItem = <SideMenuItemLink
                item={item}
                curLevel={curLevel}
            />
        } else if (item.type === 'sub') {
            curItem = <SideMenuItemSub
                item={item}
                index={index}
                curLevel={curLevel}
                toggleSubMenu={this.props.toggleSubMenu}
                traceMenu={traceMenu}
            />
        } else if (item.type === 'sep') {
            curItem = <SideMenuItemSep
                item={item}
                curLevel={curLevel}
            />
        }

        return (
            <li>
                {curItem}
                {(item.type === 'sub') && (item.open) && <SideMenuContainer
                    itemId={item.id}
                />}
            </li>
        )
    }
}

const mapStateToProps = (store, ownProps) => ({
    items: (
        store.menu.listMenu.filter(
            (item) => {
                return item.parentId === ownProps.itemId}
        )
    ),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    activateMe(e) {
        dispatch(actionActivateLink(e, ownProps, traceMenu));
    },
    toggleSubMenu(e) {
        dispatch(actionChangeSubMenuVisibility(e, ownProps, traceMenu));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuItem);