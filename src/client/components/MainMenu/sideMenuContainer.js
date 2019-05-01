import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideMenuItem from './sideMenuItem';

import './sideMenuContainer.scss';

class SideMenuContainer extends Component {
    render() {
        return (
            <ul className='side-menu-container'>
                {this.props.items.map((item, i) => (
                    <SideMenuItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
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

export default connect(mapStateToProps)(SideMenuContainer);