import {
    CHANGE_SUBMENU_VISIBILITY,
    UPDATE_LIST_MENU
} from '../actions/actionsTypes';


export default function (state = {'sideMenu': true, 'sideMenuShow': false}, action) {
    switch(action.type) {
        case UPDATE_LIST_MENU: 
            return Object.assign({}, state, {listMenu: action.listMenu})
        case CHANGE_SUBMENU_VISIBILITY:
            if (!action.ownProps.item.open) {
                action.e.target.classList.add('active-item');
            } else {
                action.e.target.classList.remove('active-item');
            } 

            let newlistMenu = state.listMenu;

            for (let i = 0; i < newlistMenu.length; i++) {
                if (newlistMenu[i].id == action.ownProps.item.id) {
                    newlistMenu[i].open = !action.ownProps.item.open;
                    break;
                }
            }

           return Object.assign({}, state, {listMenu: newlistMenu})
        default:
            return state;
    }
}