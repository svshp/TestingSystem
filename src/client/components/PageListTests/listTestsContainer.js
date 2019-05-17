import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemTests from './listTestsItem';

import ListTests from '../../data/DB/listTests';
import Table_Tests_SubCategories from '../../data/DB/tableTestsSubCategories';

import {
    actionChangeTotalObjectsCount
} from '../../store/actions/actionsPagination';

class ListTestsContainer extends Component {
    getData(listTests) {
        const {
            dataTests,
            activePage,
            objectsCountPerPage
        } = this.props;

        let res = [], tmpRes;

        let dataCompareCategories = (selectedCategories) => (item) => {
            return item.cat_test_id === selectedCategories;
        }

        if (dataTests.selectedCategories) {
            tmpRes = [].concat(ListTests.filter(
                dataCompareCategories(dataTests.selectedCategories)
            ));
        } else {
            tmpRes = [].concat(ListTests);
        }

        let dataCompareSubCategories = (selectedSubCategories1, selectedSubCategories2) => (item) => {
            return ((item.sub_cat_test_id === selectedSubCategories1)
                     || (item.sub_cat_test_id === selectedSubCategories2));
        }

        if (dataTests.selectedSubCategories1 || dataTests.selectedSubCategories2) {
            let listCurentTestsSubCategories = [].concat(Table_Tests_SubCategories.filter(
                dataCompareSubCategories(dataTests.selectedSubCategories1,
                                         dataTests.selectedSubCategories2)
            ));

            let dataCompareTests = (test_id) => (item) => {
                return item.test_id === test_id;
            }
    
            tmpRes = [].concat(tmpRes.filter(function(item) {
                let curItem = listCurentTestsSubCategories.filter(dataCompareTests(item.test_id));

                try {
                    return item.test_id === curItem[0].test_id;
                } catch (err) {
                    return false;
                }
            }));
        }

        let totalObjectsCount = tmpRes.length;
        this.props.changeTotalObjectsCount(totalObjectsCount);

        let indexStart = (activePage - 1) * objectsCountPerPage;
        let indexEnd   = Math.min(indexStart + objectsCountPerPage - 1, tmpRes.length);

        res = tmpRes.slice(indexStart, indexEnd + 1);

        return res;
    }

    render() {
        return (
            <div  className='page-list-tests__container row'>
                {this.getData(ListTests).map((item, index) => (
                    <ItemTests
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeTotalObjectsCount(totalObjectsCount) {
        dispatch(actionChangeTotalObjectsCount(totalObjectsCount));
    }
})

export default connect(null, mapDispatchToProps)(ListTestsContainer);