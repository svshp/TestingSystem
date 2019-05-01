import {
    CHANGE_SUBMENU_VISIBILITY,
    UPDATE_LIST_MENU
} from './actionsTypes';

export const actionChangeSubmenuVisibility = (e, ownProps) => ({
    type: CHANGE_SUBMENU_VISIBILITY,
    e,
    ownProps
});

export const actionUpdateListMenu = (listMenu) => ({
    type: UPDATE_LIST_MENU,
    listMenu
});
  