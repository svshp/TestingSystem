import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faBars
} from "@fortawesome/free-solid-svg-icons";

import {
    actionChangeMobileMenuVisibility
} from '../../store/actions/actionsListMenu';

import './blockHeader.scss';

class BlockHeader extends Component {
    toggleMenu() {
    }

    render() {
        return (
            <div className='block-header'>
                <div className='block-header__icon-hamburger'>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={this.props.toggleMobileMenu}
                    />
                </div>
                <div className={'block-header__title'}>
                    Система тестирования знаний
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    menu: store.menu
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleMobileMenu(e) {
        let blockSideNav = document.querySelector('.block-side-nav');
        blockSideNav.classList.toggle('show-mobile-menu');

        dispatch(actionChangeMobileMenuVisibility(e, ownProps));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlockHeader);