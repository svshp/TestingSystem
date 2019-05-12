import {
    ACTIVATE_LINK,
    CHANGE_MOBILEMENU_VISIBILITY,
    CHANGE_SUBMENU_VISIBILITY,
    UPDATE_LIST_MENU
} from '../actions/actionsTypes';

const changeTraceMenu = (traceMenu, newlistMenu, i) => {
    let curPos = newlistMenu.indexOf(traceMenu[i]);

    if (curPos !== -1) {
        newlistMenu[curPos].open = false;
    }

    traceMenu.pop();
};

export default function (state = {'sideMenu': true, 'mobileMenuShow': false}, action) {
    let newlistMenu = state.listMenu;

    switch(action.type) {
        case ACTIVATE_LINK: 
            for (let i = action.traceMenu.length - 1; i >= 0; i-- ) {
                changeTraceMenu(action.traceMenu, newlistMenu, i);
            }

            let newState = Object.assign({}, state, {listMenu: newlistMenu});

            if (state.mobileMenuShow) {
                newState = Object.assign({}, newState, {mobileMenuShow: false});

                let blockSideNav = document.querySelector('.block-side-nav');
                blockSideNav.classList.toggle('show-mobile-menu');
            }

            return newState;
        case UPDATE_LIST_MENU: 
            return Object.assign({}, state, {listMenu: action.listMenu});
        case CHANGE_MOBILEMENU_VISIBILITY:
            return Object.assign({}, state, {mobileMenuShow: !state.mobileMenuShow});
        case CHANGE_SUBMENU_VISIBILITY:
            if ((action.traceMenu.length > 0) && (action.traceMenu[action.traceMenu.length - 1].id === action.ownProps.item.id)) {
                changeTraceMenu(action.traceMenu, newlistMenu, action.traceMenu.length - 1);
            } else {
                for (let i = action.traceMenu.length - 1; i >= 0; i-- ) {
                    if (action.traceMenu[i].level > action.ownProps.item.level) {
                        changeTraceMenu(action.traceMenu, newlistMenu, i);
                    } else if (action.traceMenu[i].level === action.ownProps.item.level) {
                        if (action.traceMenu[i].parentId === undefined) {
                            if (action.traceMenu[i].level === 0) {
                                changeTraceMenu(action.traceMenu, newlistMenu, i);
                            }
                        } else {
                            if (action.traceMenu[i].parentId === action.ownProps.item.parentId) {
                                changeTraceMenu(action.traceMenu, newlistMenu, i);
                            }
                        }
                    }
                }
    
                let curPos = newlistMenu.indexOf(action.ownProps.item);
    
                if (curPos !== -1) {
                    newlistMenu[curPos].open = true;
                    action.traceMenu.push(newlistMenu[curPos]);
                }
            }

            return Object.assign({}, state, {listMenu: newlistMenu});
        default:
            return state;
    }
}