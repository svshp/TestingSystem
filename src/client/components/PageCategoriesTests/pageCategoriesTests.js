import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListCategoriesTests from './listCategoriesTests';
import ListSubCategoriesTests from './listSubCategoriesTests';
import CategoryTest from './categoryTest';
import { actionUpdateListCategories } from '../../store/actions/actionsListCategories';

import './pageCategoriesTests.scss';

class PageCategoriesTests extends Component {
    componentDidMount () {
        if (!this.props.tests.categories.length) {
            this.props.updateStoreListCategories(ListCategoriesTests, ListSubCategoriesTests);
        }
    }

    prepareData(tests) {
        let newList = [];
        let flagFound;

        for (let i = 0; i < tests.categories.length; i++) {
            newList.push({category: tests.categories[i], sub_category: []});
            flagFound = false;
        
            for (let j = 0; j < tests.subCategories.length; j++) {
                if (tests.subCategories[j].cat_test_id === tests.categories[i].cat_test_id) {
                    newList[newList.length - 1].sub_category.push(tests.subCategories[j]);

                    flagFound = true;
                } else if (flagFound) {
                    break;
                }
            }
        }

        return newList;
    }

    render() {
        return (
            <div className='page-test-categories'>
                <div className='page-contacts__title row'>
                    <h2>Категории тестов</h2>
                </div>
                <div className='page-test-categories__content row'>
                    {this.prepareData(this.props.tests).map((item, index) => (
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