import {
    PAGINATION_CHANGE_PAGE,
    PAGINATION_CHANGE_TOTAL_OBJECT
} from '../actions/actionsTypes';

export default function (state = {'activePage': 1, 'totalObjectsCount': 24}, action) {

    switch(action.type) {
        case PAGINATION_CHANGE_PAGE:
            return Object.assign({}, state, {activePage: action.activePage});
            case PAGINATION_CHANGE_TOTAL_OBJECT:
            return Object.assign({}, state, {totalObjectsCount: action.totalObjectsCount});
        default:
            return state;
    }
}