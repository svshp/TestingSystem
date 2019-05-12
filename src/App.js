import React, { Component } from 'react';

import BlockHeader from './client/containers/BlockHeader/blockHeader';
import BlockContent from './client/containers/BlockContent/blockContent';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='app-component'>
                <BlockHeader />
                <BlockContent />
            </div>
        );
    }
}

export default App;