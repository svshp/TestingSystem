import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideMenu from '../../components/MainMenu/sideMenu.js';
import ListMenu from '../../components/MainMenu/listMenu.js';

import './blockSideNav.scss';

class BlockSideNav extends Component {
    render() {
        return (
            <div className={this.props.menu.sideMenu ? 'block-side-nav show-side-menu' : 'block-side-nav'}>
                <SideMenu
                    listMenu={ListMenu}
                />
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    menu: store.menu
})

export default connect(mapStateToProps)(BlockSideNav);