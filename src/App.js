import React, { Component } from 'react';

import BlockHeader from './client/containers/BlockHeader/blockHeader';
import BlockSideNav from './client/containers/BlockSideNav/blockSideNav';
import BlockMain from './client/containers/BlockMain/blockMain';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='app-component'>
                <BlockHeader />
                <BlockSideNav />
                <BlockMain />
            </div>
        );
    }
}

export default App;