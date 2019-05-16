import { combineReducers } from 'redux';

import menu from './sideMenuReducer';
import tests from './testsReducer';
import pagination from './paginationReducer';

export default combineReducers(
    {
        menu,
        tests,
        pagination
    }
);