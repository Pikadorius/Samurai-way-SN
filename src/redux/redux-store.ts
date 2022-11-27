import {combineReducers, createStore} from 'redux';
import profileReducer, {ProdileActionsType} from './profile_reducer';
import dialogsReducer, {DialogsActionsType} from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
// combine all reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

// combine all actions type
export type ActionsType = DialogsActionsType | ProdileActionsType;

export type StoreType = typeof store;
let store = createStore(reducers);

export default store;