import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListTestsHeader from './listTestsHeader';
import ListTestsContainer from './listTestsContainer';
import Pagination from '../Pagination/pagination';

import {
    actionChangePage
} from '../../store/actions/actionsPagination';

import './pageListTests.scss';

const OBJECTS_COUNT_PER_PAGE = 8;

class PageListTests extends Component {
    constructor() {
        super();
        this.handlePageChange = this._handlePageChange.bind(this);
    }

    _handlePageChange(activePage) {
        this.props.changePage(activePage);
    }

    render() {
        return (
            <div className='page-list-tests'>
                <div className='page-list-tests__title row'>
                    <h2>Список тестов</h2>
                </div>
                <ListTestsHeader />
                <ListTestsContainer
                    dataTests={this.props.dataTests}
                    activePage={this.props.dataPagination.activePage}
                    objectsCountPerPage={OBJECTS_COUNT_PER_PAGE}
                    onChange={this.handlePaginationData}
                    />
                <div className='page-list-tests__pagination'>
                    <Pagination
                        activePage={this.props.dataPagination.activePage}
                        objectsCountPerPage={OBJECTS_COUNT_PER_PAGE}
                        totalObjectsCount={this.props.dataPagination.totalObjectsCount}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    dataTests: store.tests,
    dataPagination: store.pagination
})

const mapDispatchToProps = (dispatch) => ({
    changePage(activePage) {
        dispatch(actionChangePage(activePage));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PageListTests);