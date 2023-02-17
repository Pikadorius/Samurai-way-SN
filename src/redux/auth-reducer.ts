import {Dispatch} from 'redux';
import {authAPI, LoginFormType} from '../api/API';
import {AppDispatch} from './redux-store';
import {stopSubmit} from 'redux-form';
import {setAppInitializedAC, setAppStatusAC} from "./appReducer";

const enum ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
    LOG_OUT = 'LOG_OUT'
}

export type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

type ActionType =
    SetUserDataACType |
    LogoutACType

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {...state, ...action.payload.data}
        }
        case ACTIONS_TYPE.LOG_OUT: {
            return {...initialState};
        }
        default:
            return state
    }
}

export type SetUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: InitialStateType) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {
            data
        }
    } as const
}

export type LogoutACType = ReturnType<typeof logoutAC>
export const logoutAC = () => ({type: ACTIONS_TYPE.LOG_OUT} as const)


export type AuthUserTCType = () => void
export const authUserTC = () => (dispatch: Dispatch) => {
    return authAPI.authMe().then((result) => {
        if (result.resultCode === 0) {
            dispatch(setAuthUserData({...result.data, isAuth: true}))
        }
    })
}

export type AuthFromLogin = (loginData: LoginFormType) => void
export const authFromLoginTC: AuthFromLogin = (loginData) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC('loading'))
    const res = await authAPI.login(loginData)
    if (res.data.resultCode === 0) {
        dispatch(authUserTC())
        dispatch(setAppStatusAC('success'))
    } else {
        let action = stopSubmit('login', {_error: res.data.messages.length > 0 ? res.data.messages[0] : 'Something wrong'});
        dispatch(action)
        dispatch(setAppStatusAC('failed'))
    }

}

export type LogoutTCType = () => void
export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout().then(() => {
        dispatch(logoutAC())
    })
}