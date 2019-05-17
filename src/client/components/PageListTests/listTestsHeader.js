import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    actionChangeQuantSubCategories,
    actionChangeSubCategories,
    actionUpdateListCategories
} from '../../store/actions/actionsListCategories';
import {
    actionChangePage
} from '../../store/actions/actionsPagination';

import ListCategoriesTests from '../../data/DB/listCategoriesTests';
import ListTypeSubCategoriesTests from '../../data/DB/listTypeSubCategoriesTests';
import ListSubCategoriesTests from '../../data/DB/listSubCategoriesTests';

import ListTestsHeaderSelectCategories from './listTestsHeaderSelectCategories';

import './listTestsHeader.scss';

class ListTestsHeader extends Component {
    constructor() {
        super();
        this.handleСhangeCategories = this._handleСhangeCategories.bind(this);
    }

    componentDidMount() {
        if (!this.props.tests.categories.length) {
                this.props.updateStoreListCategories(ListCategoriesTests, ListTypeSubCategoriesTests);
        }

        this.handleСhangeCategories.bind(this);
    }

    _handleСhangeCategories(thisContent, e) {
        let curTypeSubCategories;

        function getSubCategories(ind) {
            let res = [];

            if (curTypeSubCategories.length > ind) {
                res = ListSubCategoriesTests.filter(function(item) {
                    return item.type_sub_cat_test_id === curTypeSubCategories[ind].type_sub_cat_test_id;
                });
            }

            return res;
        }

        let selectedCategories = +document.querySelector(thisContent.props.selectedClassName).value;

        if (thisContent.props.selectedCategories === 'selectedCategories') {
            curTypeSubCategories = this.props.tests.typeSubCategories.filter(function(item) {
                return item.cat_test_id === selectedCategories;
            });
        
            this.props.changeQuantSubCategories(
                selectedCategories,
                0,
                0,
                curTypeSubCategories,
                [
                    getSubCategories(0),
                    getSubCategories(1)
                ]
            );
        } else if (thisContent.props.selectedCategories === 'selectedSubCategories1') {
            this.props.changeSubCategories('selectedSubCategories1', selectedCategories);
        } else if (thisContent.props.selectedCategories === 'selectedSubCategories2') {
            this.props.changeSubCategories('selectedSubCategories2', selectedCategories);
        }

        this.props.changePage(1);
    }

    render() {
        return (
            <div className='page-list-tests__header row'>
                <ListTestsHeaderSelectCategories
                    testsCategories={this.props.tests.categories}
                    fieldId={'cat_test_id'}
                    title={'Все категории ...'}
                    onChangeFunction={this.handleСhangeCategories}
                    thisContent={this}
                    className='page-list-tests__header_categories-tests selected-category col-12 col-sm-4 col-lg-2'
                    selectedClassName='.page-list-tests__header_categories-tests.selected-category'
                    selectedCategories='selectedCategories'
                />
                <div className='page-list-tests__header_subcategories-tests col-12 col-sm-5'>
                {
                    this.props.tests.listTypeSubCategories.length > 0 ? <ListTestsHeaderSelectCategories
                        testsCategories={this.props.tests.listSubCategories[0]}
                        fieldId={'sub_cat_test_id'}
                        title={this.props.tests.listTypeSubCategories[0].name + ' ...'}
                        onChangeFunction={this.handleСhangeCategories}
                        className='page-list-tests__header_categories-tests selected-subcategory-1 col-12 col-sm-2 col-lg-1'
                        selectedClassName='.page-list-tests__header_categories-tests.selected-subcategory-1'
                        selectedCategories='selectedSubCategories1'
                    /> : ''
                }
                {
                    this.props.tests.listTypeSubCategories.length > 1 ? <ListTestsHeaderSelectCategories
                        testsCategories={this.props.tests.listSubCategories[1]}
                        fieldId={'sub_cat_test_id'}
                        title={this.props.tests.listTypeSubCategories[1].name + ' ...'}
                        onChangeFunction={this.handleСhangeCategories}
                        className='page-list-tests__header_categories-tests selected-subcategory-2 col-12 col-sm-2 col-ld-1'
                        selectedClassName='.page-list-tests__header_categories-tests.selected-subcategory-2'
                        selectedCategories='selectedSubCategories2'
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
    changeQuantSubCategories(selectedCategories,
                             selectedSubCategories1,
                             selectedSubCategories2,
                             listTypeSubCategories,
                             listSubCategories) {
        dispatch(actionChangeQuantSubCategories(selectedCategories,
                                                selectedSubCategories1,
                                                selectedSubCategories2,
                                                listTypeSubCategories,
                                                listSubCategories));
    },
    changeSubCategories(nameSlectedSubCategories, slectedSubCategories) {
        dispatch(actionChangeSubCategories(nameSlectedSubCategories, slectedSubCategories));
    },
    changePage(activePage) {
        dispatch(actionChangePage(activePage));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTestsHeader);