import {Dispatch} from 'redux';
import {authAPI, LoginFormType} from '../API/API';

const enum ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
    LOG_OUT = 'LOG_OUT'
}

export type InititalStateType = {
    id: number | null
    login: string | null
    email: string | null
    photo: string | undefined
    isAuth: boolean
}

const initailState: InititalStateType = {
    id: null,
    login: null,
    email: null,
    photo: undefined,
    isAuth: false
}

type ActionType =
    SetUserDataACType |
    LogOutUserACType

export const authReducer = (state: InititalStateType = initailState, action: ActionType): InititalStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {...state, ...action.payload.data, isAuth: true}
        }
        case ACTIONS_TYPE.LOG_OUT: {
            return initailState;
        }
        default:
            return state
    }
}

export type SetUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: InititalStateType) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {
            data
        }
    } as const
}

export type LogOutUserACType = ReturnType<typeof logOutUser>
export const logOutUser = () => {
    return {
        type: ACTIONS_TYPE.LOG_OUT
    } as const
}

export type AuthUserTCType = () => void
export const authUser = () => (dispatch: Dispatch) => {
    authAPI.authMe().then((result) => {
        if (result.resultCode === 0) {
            dispatch(setAuthUserData(result.data))
        }
    })
}

export type AuthFromLogin = (loginData: LoginFormType) => void
export const authFromLogin: AuthFromLogin = (loginData) => (dispatch: Dispatch) => {
    authAPI.login(loginData).then(res => {
        if (res.data.resultCode === 0) {
            authAPI.authMe().then(res => {
                console.log('authorize me!!!!')
                dispatch(setAuthUserData(res.data))
            })
        }
        else alert('Something wrong')
    })
}

export type LogoutTCType = () => void
export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout().then(()=>{
        dispatch(logOutUser())
    })
}