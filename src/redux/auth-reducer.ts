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
    SetUserDataACType |
    SetUserPhotoACType

export const authReducer = (state: InititalStateType = initailState, action: ActionType): InititalStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {...state, ...action.payload.data, isAuth: true}
        }
        case ACTIONS_TYPE.SET_USER_PHOTO: {
            return {...state, photo: action.payload.photo}
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

type SetUserPhotoACType = ReturnType<typeof setUserPhoto>
export const setUserPhoto = (photo: string) => {
    return {
        type: ACTIONS_TYPE.SET_USER_PHOTO,
        payload: {
            photo
        }
    } as const
}