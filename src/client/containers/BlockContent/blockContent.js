import React, { Component } from 'react';

import BlockSideNav from '../BlockSideNav/blockSideNav';
import BlockMain from '../BlockMain/blockMain';

import './blockContent.scss';

class BlockContent extends Component {
    render() {
        return (
            <div className='block-content'>
                <BlockSideNav />
                <BlockMain />
            </div>
        )
    }
}

export default BlockContent;