import {
    UPDATE_LIST_CATEGORIES
} from '../actions/actionsTypes';

export const actionUpdateListCategories = (listCategories, listSubCategories) => ({
    type: UPDATE_LIST_CATEGORIES,
    listCategories,
    listSubCategories
});