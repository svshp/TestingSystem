import {
    CHANGE_QUANT_SUBCATEGORIES,
    UPDATE_LIST_CATEGORIES
} from '../actions/actionsTypes';

function compareCategories(a, b) {
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
}

function compareTypeSubCategories(a, b) {
    if (a.cat_test_id === b.cat_test_id) {
        return a.order - b.order;
    }

    return a.cat_test_id > b.cat_test_id ? 1 : -1;
}

function sortCategories(listCategories) {
    return listCategories.sort(compareCategories)
}

function sortTypeSubCategories(listTypeSubCategories) {
    return listTypeSubCategories.sort(compareTypeSubCategories)
}

export default function (state = {'categories': [],
                                  'typeSubCategories': [],
                                  'listTypeSubCategories': [],
                                  'listSubCategories': [[], []]
                                 }, action) {
//    let newListCategories = state.categories;
//    let newListSubCategories = state.subCategories;

    switch(action.type) {
        case CHANGE_QUANT_SUBCATEGORIES:
            return Object.assign({}, state, {
                listTypeSubCategories: action.listTypeSubCategories,
                listSubCategories: action.ListSubCategoriesTests
            });
        case UPDATE_LIST_CATEGORIES: 
            return Object.assign({}, state, {
                categories: sortCategories(action.listCategories),
                typeSubCategories: sortTypeSubCategories(action.listTypeSubCategories)
            });
        default:
            return state;
    }
}