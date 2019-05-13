import {
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

function compareSubCategories(a, b) {
    if (a.cat_test_id === b.cat_test_id) {
        return a.order - b.order;
    }

    return a.cat_test_id > b.cat_test_id ? 1 : -1;
}

function sortCategories(listCategories) {
    return listCategories.sort(compareCategories)
}

function sortSubCategories(listSubCategories) {
    return listSubCategories.sort(compareSubCategories)
}

export default function (state = {'categories': [], 'subCategories': []}, action) {
    let newListCategories = state.categories;
    let newListSubCategories = state.subCategories;

    switch(action.type) {
        case UPDATE_LIST_CATEGORIES: 
            return Object.assign({}, state, {
                categories: sortCategories(action.listCategories),
                subCategories: sortSubCategories(action.listSubCategories)
            });
        default:
            return state;
    }
}