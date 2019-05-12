import {
    ACTIVATE_LINK,
    CHANGE_MOBILEMENU_VISIBILITY,
    CHANGE_SUBMENU_VISIBILITY,
    UPDATE_LIST_MENU
} from './actionsTypes';

export const actionActivateLink = (e, ownProps, traceMenu) => ({
    type: ACTIVATE_LINK,
    e,
    ownProps,
    traceMenu
});

export const actionChangeMobileMenuVisibility = (e, ownProps) => ({
    type: CHANGE_MOBILEMENU_VISIBILITY,
    e,
    ownProps
});

export const actionChangeSubMenuVisibility = (e, ownProps, traceMenu) => ({
    type: CHANGE_SUBMENU_VISIBILITY,
    e,
    ownProps,
    traceMenu
});

export const actionUpdateListMenu = (listMenu) => ({
    type: UPDATE_LIST_MENU,
    listMenu
});