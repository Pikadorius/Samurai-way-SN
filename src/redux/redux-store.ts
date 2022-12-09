import {combineReducers, createStore} from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
import usersReducer from "./users-reducer";
import {musicReducer} from './music_reducer';

// combine all reducers
let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer
})

export type StateType = ReturnType<typeof reducer>


export type StoreType = typeof store;
let store = createStore(reducer);

export default store;