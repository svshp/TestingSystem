import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideMenuContainer from './sideMenuContainer';
import { actionUpdateListMenu } from '../../store/actions/actionsListMenu';

import './sideMenu.scss';

class SideMenu extends Component {
    constructor(props) {
        super(props);

        if (props.listMenu) {
            this.updateListMenu(props.listMenu);
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.listMenu !== nextProps.listMenu) {
            this.updateListMenu(nextProps.listMenu);
        }
    }
    
    updateListMenu(listMenu) {
        this.props.updateStoreListMenu(listMenu);
    }

    render() {
        return (
            <div className='side-menu'>
                <SideMenuContainer />
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    store
})

const mapDispatchToProps = (dispatch) => ({
    updateStoreListMenu(listMenu) {
        dispatch(actionUpdateListMenu(listMenu));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);