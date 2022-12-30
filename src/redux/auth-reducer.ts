import {Dispatch} from 'redux';
import {authAPI} from '../API/API';

const enum ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_USER_PHOTO = 'SET_USER_PHOTO'
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
    SetUserDataACType

export const authReducer = (state: InititalStateType = initailState, action: ActionType): InititalStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {...state, ...action.payload.data, isAuth: true}
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

export type AuthUserTCType = ()=>void
export const authUser = ()=>(dispatch:Dispatch)=>{
    authAPI.authMe().then((result) => {
        if (result.resultCode === 0) {
            dispatch(setAuthUserData(result.data))
        }
    })
}