import {combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionsType} from './profile_reducer';
import dialogsReducer, {DialogsActionsType} from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';

// combine all reducers
let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
export type StateType = ReturnType<typeof reducer>

// combine all actions type
export type ActionsType = DialogsActionsType | ProfileActionsType;

export type StoreType = typeof store;
let store = createStore(reducer);

export default store;