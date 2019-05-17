import {
    CHANGE_QUANT_SUBCATEGORIES,
    CHANGE_SUBCATEGORIES,
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
                                  'selectedCategories': 0,
                                  'selectedSubCategories1': 0,
                                  'selectedSubCategories2': 0,
                                  'typeSubCategories': [],
                                  'listTypeSubCategories': [],
                                  'listSubCategories': [[], []]
                                 }, action) {

    switch(action.type) {
        case CHANGE_QUANT_SUBCATEGORIES:
            return Object.assign({}, state, {
                selectedCategories: action.selectedCategories,
                selectedSubCategories1: action.selectedSubCategories1,
                selectedSubCategories2: action.selectedSubCategories2,
                listTypeSubCategories: action.listTypeSubCategories,
                listSubCategories: action.ListSubCategoriesTests
            });
        case CHANGE_SUBCATEGORIES:
            if (action.nameSlectedSubCategories === 'selectedSubCategories1') {
                return Object.assign({}, state, {
                    selectedSubCategories1: action.slectedSubCategories
                });
            } else if (action.nameSlectedSubCategories === 'selectedSubCategories2') {
                return Object.assign({}, state, {
                    selectedSubCategories2: action.slectedSubCategories
                });
            } else {
                return state;
            }
        case UPDATE_LIST_CATEGORIES: 
            return Object.assign({}, state, {
                categories: sortCategories(action.listCategories),
                typeSubCategories: sortTypeSubCategories(action.listTypeSubCategories)
            });
        default:
            return state;
    }
}