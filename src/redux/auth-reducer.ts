const enum ACTIONS_TYPE {
    SET_USER_DATA='SET_USER_DATA'
}

export type InititalStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initailState: InititalStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: InititalStateType = initailState, action: SetUserDataACType): InititalStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {...state, ...action.payload.data, isAuth:true}
        }
        default:
            return state
    }
}

export type SetUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data:InititalStateType) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {
            data
        }
    }
}