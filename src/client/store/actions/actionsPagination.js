import {
    PAGINATION_CHANGE_PAGE,
    PAGINATION_CHANGE_TOTAL_OBJECT
} from '../actions/actionsTypes';

export const actionChangePage = (activePage) => ({
    type: PAGINATION_CHANGE_PAGE,
    activePage
});

export const actionChangeTotalObjectsCount = (totalObjectsCount) => ({
    type: PAGINATION_CHANGE_TOTAL_OBJECT,
    totalObjectsCount
});
