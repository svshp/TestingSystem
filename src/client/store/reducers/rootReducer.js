import { combineReducers } from 'redux';

import menu from './sideMenuReducer';
import tests from './testsReducer';

export default combineReducers(
    {
        menu,
        tests
    }
);