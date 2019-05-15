import React, { Component } from 'react';

import ListTestsHeader from './listTestsHeader';

import './pageListTests.scss';

class PageListTests extends Component {
    render() {
        return (
            <div className='page-list-tests'>
                <div className='page-list-tests__title row'>
                    <h2>Список тестов</h2>
                </div>
                <ListTestsHeader />
            </div>
        )
    }
}

export default PageListTests;