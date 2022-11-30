import {combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionsType, ProfilePageType} from './profile_reducer';
import dialogsReducer, {DialogsActionsType, DialogsPageType} from './dialogs_reducer';
import sidebarReducer, {SidebarType} from './sidebar_reducer';
// combine all reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

// combine all actions type
export type ActionsType = DialogsActionsType | ProfileActionsType;

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = typeof store;
let store = createStore(reducers);

export default store;