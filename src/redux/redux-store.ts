import {combineReducers, createStore} from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
import usersReducer from "./users-reducer";
import {musicReducer} from './music_reducer';
import {authReducer} from './auth-reducer';

// combine all reducers
export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer,
    auth: authReducer
})

export type StateType = ReturnType<typeof reducer>

export type StoreType = typeof store;
let store = createStore(reducer);

export default store;


// @ts-ignore
window.store=store;