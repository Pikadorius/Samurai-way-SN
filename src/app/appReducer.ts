import {AppDispatch} from "../bll/redux-store";
import {authUserTC} from "../components/Login/auth-reducer";

export type StatusType = 'idle' | 'success' | 'loading' | 'failed'

const initialState = {
    status: 'idle' as StatusType,
    error: null as null | string,
    isInitialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_APP_STATUS":
            return {...state, status: action.payload}
        case "SET_APP_ERROR":
            return {...state, error: action.payload}
        case "SET_APP_INITIALIZED":
            return {...state, isInitialized: action.payload}
        default:
            return state
    }
}

export type AppActionsType =
    SetAppStatusACType |
    SetAppErrorACType |
    SetAppInitializedACType

type SetAppStatusACType = ReturnType<typeof setAppStatusAC>
export const setAppStatusAC = (status: StatusType) => ({type: 'SET_APP_STATUS', payload: status} as const)

type SetAppErrorACType = ReturnType<typeof setAppErrorAC>
export const setAppErrorAC = (error: string | null) => ({type: 'SET_APP_ERROR', payload: error} as const)

type SetAppInitializedACType = ReturnType<typeof setAppInitializedAC>
export const setAppInitializedAC = (isInitialized: boolean) => ({
    type: 'SET_APP_INITIALIZED',
    payload: isInitialized
} as const)

export const initializeTC = () => (dispatch: AppDispatch) => {
    dispatch(authUserTC()).then(() => {
        dispatch(setAppInitializedAC(true))
    })
}