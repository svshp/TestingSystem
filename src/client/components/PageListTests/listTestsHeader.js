import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    actionChangeQuantSubCategories,
    actionUpdateListCategories
} from '../../store/actions/actionsListCategories';

import ListCategoriesTests from '../../data/DB/listCategoriesTests';
import ListTypeSubCategoriesTests from '../../data/DB/listTypeSubCategoriesTests';
import ListSubCategoriesTests from '../../data/DB/listSubCategoriesTests';

import ListTestsHeaderSelectCategories from './listTestsHeaderSelectCategories';

import './listTestsHeader.scss';

class ListTestsHeader extends Component {
    componentDidMount() {
        if (!this.props.tests.categories.length) {
                this.props.updateStoreListCategories(ListCategoriesTests, ListTypeSubCategoriesTests);
        }

        this.changeCategories(this);
    }

    changeCategories(thisContent, e) {
        let selectedCategories = +document.querySelector('.page-list-tests__header_categories-tests').value;

        let curTypeSubCategories = thisContent.props.tests.typeSubCategories.filter(function(item) {
            return item.cat_test_id === selectedCategories;
        });

        function getSubCategories(ind) {
            let res = [];

            if (curTypeSubCategories.length > ind) {
                res = ListSubCategoriesTests.filter(function(item) {
                    return item.type_sub_cat_test_id === curTypeSubCategories[ind].type_sub_cat_test_id;
                });
            }

            return res;
        }

        thisContent.props.changeQuantSubCategories(
            selectedCategories,
            curTypeSubCategories,
            [
                getSubCategories(0),
                getSubCategories(1)
            ]
        );
    }

    render() {
        return (
            <div className='page-list-tests__header row'>
                <ListTestsHeaderSelectCategories
                    testsCategories={this.props.tests.categories}
                    fieldId={'cat_test_id'}
                    title={'Все категории ...'}
                    onChangeFunction={this.changeCategories}
                    thisContent={this}
                    className='page-list-tests__header_categories-tests col-12 col-sm-4 col-lg-2'
                />
                <div className='page-list-tests__header_subcategories-tests col-12 col-sm-5'>
                {
                    this.props.tests.listTypeSubCategories.length > 0 ? <ListTestsHeaderSelectCategories
                        testsCategories={this.props.tests.listSubCategories[0]}
                        fieldId={'cat_test_id'}
                        title={this.props.tests.listTypeSubCategories[0].name + ' ...'}
                        onChangeFunction={this.changeCategories}
                        className='page-list-tests__header_categories-tests col-12 col-sm-2 col-lg-1'
                    /> : ''
                }
                {
                    this.props.tests.listTypeSubCategories.length > 1 ? <ListTestsHeaderSelectCategories
                        testsCategories={this.props.tests.listSubCategories[1]}
                        fieldId={'cat_test_id'}
                        title={this.props.tests.listTypeSubCategories[1].name + ' ...'}
                        onChangeFunction={this.changeCategories}
                        className='page-list-tests__header_categories-tests col-12 col-sm-2 col-ld-1'
                    /> : ''
                }
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
    },
    changeQuantSubCategories(selectedCategories, listTypeSubCategories, listSubCategories) {
        dispatch(actionChangeQuantSubCategories(selectedCategories, listTypeSubCategories, listSubCategories));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTestsHeader);