import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paginator from './paginator';
import Page from './page';

import {
    actionChangePage
} from '../../store/actions/actionsPagination';

import './pagination.scss';

// Description variables:
//     - activePage          - current active page
//     - objectsCountPerPage - quantity objects per page (default 10)
//     - pageRangeDisplayed  - quantity pages for display pagination (default 5)
//     - totalObjectsCount   - total quantity objects

class Pagination extends Component {

    static defaultProps = {
        activePage: 1,
        objectsCountPerPage: 10,
        pageRangeDisplayed: 5,
        firstPageText: "«",
        prevPageText: "<",
        nextPageText: ">",
        lastPageText: "»"
    }

    isPrevPageVisible(hasPreviousPage, firstPage) {
        if (!hasPreviousPage || firstPage === 1) {
            return false;
        }

        return true;
      }

      isNextPageVisible(hasNextPage, lastPage, totalPages) {
        if(!hasNextPage || lastPage === totalPages) {
            return false;
        }

        return true;
      }

      buildPages() {
        const pages = [];

        const {
            activePage,
            objectsCountPerPage,
            totalObjectsCount,
            pageRangeDisplayed,
            onChange,
            prevPageText,
            nextPageText
        } = this.props;

        const paginationInfo = new Paginator(
            objectsCountPerPage,
            pageRangeDisplayed
        ).build(totalObjectsCount, activePage);

        for (let i = paginationInfo.firstPage; i <= paginationInfo.lastPage; i++) {
            pages.push(
                <Page
                    isActive={i === activePage}
                    key={i}
                    pageNumber={i}
                    pageText={i + ''}
                    onClick={onChange}
                    href='#'
                />
            );
        }
      
        this.isPrevPageVisible(paginationInfo.hasPreviousPage, paginationInfo.firstPage) && pages.unshift(
            <Page
                key={"prev" + paginationInfo.previousPage}
                pageNumber={paginationInfo.previousPage}
                pageText={prevPageText}
                onClick={onChange}
            />
        );

        this.isNextPageVisible(paginationInfo.hasNextPage, paginationInfo.lastPage, paginationInfo.totalPages) && pages.push(
            <Page
            key={"next" + paginationInfo.nextPage}
            pageNumber={paginationInfo.nextPage}
            pageText={nextPageText}
            onClick={onChange}
            />
        );

        return pages;
    }
  
    render() {
        const pages = this.buildPages();

        return (
            <ul className='pagination'>
                {pages}
            </ul>
        )
    }
}

const mapStateToProps = (store) => ({
    pagination: store.pagination
})

const mapDispatchToProps = (dispatch) => ({
    changePage() {
        dispatch(actionChangePage());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);