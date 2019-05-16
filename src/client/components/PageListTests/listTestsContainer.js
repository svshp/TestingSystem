import React, { Component } from 'react';

import ItemTests from './listTestsItem';

import ListTests from '../../data/DB/listTests';

class ListTestsContainer extends Component {

    getData(listTests) {
        const {
            dataTests,
            activePage,
            objectsCountPerPage,
            onChange
        } = this.props;

        let res = [], tmpRes;

        let dataCompare = (selectedCategories) => (item) => {
            return item.cat_test_id === selectedCategories;
        }

        if (dataTests.selectedCategories) {
            tmpRes = [].concat(ListTests.filter(dataCompare(dataTests.selectedCategories)));
        } else {
            tmpRes = [].concat(ListTests);
        }

        let indexStart = (activePage - 1) * objectsCountPerPage;
        let indexEnd   = Math.min(indexStart + objectsCountPerPage - 1, tmpRes.length);

        res = tmpRes.slice(indexStart, indexEnd + 1);

        onChange(res.length);

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

export default ListTestsContainer;