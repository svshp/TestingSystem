import {
    CHANGE_QUANT_SUBCATEGORIES,
    CHANGE_SUBCATEGORIES,
    UPDATE_LIST_CATEGORIES
} from '../actions/actionsTypes';

export const actionChangeQuantSubCategories = (selectedCategories,
                                               selectedSubCategories1,
                                               selectedSubCategories2,
                                               listTypeSubCategories,
                                               ListSubCategoriesTests) => ({
    type: CHANGE_QUANT_SUBCATEGORIES,
    selectedCategories,
    selectedSubCategories1,
    selectedSubCategories2,
    listTypeSubCategories,
    ListSubCategoriesTests
});

export const actionChangeSubCategories = (nameSlectedSubCategories, slectedSubCategories) => ({
    type: CHANGE_SUBCATEGORIES,
    nameSlectedSubCategories,
    slectedSubCategories
});

export const actionUpdateListCategories = (listCategories, listTypeSubCategories) => ({
    type: UPDATE_LIST_CATEGORIES,
    listCategories,
    listTypeSubCategories
});