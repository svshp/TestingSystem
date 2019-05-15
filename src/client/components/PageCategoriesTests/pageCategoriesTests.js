import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryTest from './categoryTest';
import { actionUpdateListCategories } from '../../store/actions/actionsListCategories';

import ListCategoriesTests from '../../data/DB/listCategoriesTests';
import ListTypeSubCategoriesTests from '../../data/DB/listTypeSubCategoriesTests';

import { prepareDataTests } from '../../generalFunctions/generalFunctions';

import './pageCategoriesTests.scss';

class PageCategoriesTests extends Component {
    componentDidMount () {
        if (!this.props.tests.categories.length) {
            this.props.updateStoreListCategories(ListCategoriesTests, ListTypeSubCategoriesTests);
        }
    }

    render() {
        return (
            <div className='page-categories-tests'>
                <div className='page-categories-tests__title row'>
                    <h2>Категории тестов</h2>
                </div>
                <div className='page-categories-tests__content row'>
                    {prepareDataTests(this.props.tests).map((item, index) => (
                        <CategoryTest
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    tests: store.tests
})

const mapDispatchToProps = (dispatch) => ({
    updateStoreListCategories(listCategories, listSubCategories) {
        dispatch(actionUpdateListCategories(listCategories, listSubCategories));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PageCategoriesTests);