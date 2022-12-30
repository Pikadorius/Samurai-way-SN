import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
import usersReducer from "./users-reducer";
import {musicReducer} from './music_reducer';
import {authReducer} from './auth-reducer';
import thunkMIddleware from 'redux-thunk';

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

const middlewareEnhancer = applyMiddleware(thunkMIddleware)

export type StoreType = typeof store;
let store = createStore(reducer,middlewareEnhancer);

export default store;


// @ts-ignore
window.store=store;