import {
    CHANGE_QUANT_SUBCATEGORIES,
    UPDATE_LIST_CATEGORIES
} from '../actions/actionsTypes';

export const actionChangeQuantSubCategories = (listTypeSubCategories, ListSubCategoriesTests) => ({
    type: CHANGE_QUANT_SUBCATEGORIES,
    listTypeSubCategories,
    ListSubCategoriesTests
});

export const actionUpdateListCategories = (listCategories, listTypeSubCategories) => ({
    type: UPDATE_LIST_CATEGORIES,
    listCategories,
    listTypeSubCategories
});