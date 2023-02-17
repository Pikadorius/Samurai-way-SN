import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
import usersReducer from "./users-reducer";
import {musicReducer} from './music_reducer';
import {authReducer} from './auth-reducer';
import thunkMIddleware, {ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";


// combine all reducers
export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type StateType = ReturnType<typeof reducer>

const middlewareEnhancer = applyMiddleware(thunkMIddleware)

export type StoreType = typeof store;
let store = createStore(reducer, middlewareEnhancer);

export type AppDispatch = ThunkDispatch<StateType, any, AnyAction>

export default store;


// @ts-ignore
window.store = store;