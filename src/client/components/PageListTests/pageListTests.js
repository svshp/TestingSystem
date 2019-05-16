import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListTestsHeader from './listTestsHeader';
import ListTestsContainer from './listTestsContainer';
import Pagination from '../Pagination/pagination';

import ListTests from '../../data/DB/listTests';

import {
    actionChangePage,
    actionChangeTotalObjectsCount
} from '../../store/actions/actionsPagination';

import './pageListTests.scss';

const OBJECTS_COUNT_PER_PAGE = 8;

class PageListTests extends Component {
    constructor(props) {
        super();
        this.handlePageChange = this._handlePageChange.bind(this);
        this.handlePaginationData = this._handlePaginationData.bind(this);
    }

    _handlePageChange(activePage) {
        this.props.changePage(activePage);
    }

    _handlePaginationData(totalObjectsCount) {
//        this.props.changeTotalObjectsCount(totalObjectsCount);
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
    },
    changeTotalObjectsCount(totalObjectsCount) {
        dispatch(actionChangeTotalObjectsCount(totalObjectsCount));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PageListTests);