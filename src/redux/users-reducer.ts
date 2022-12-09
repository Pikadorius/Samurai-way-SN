type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    uniqueUrlName: string
    followed: boolean
}

const initialState:InitialStateType = {
    users: [],
    count: 6,
}

export type InitialStateType = {
    users: UserType[],
    count: number
}

export const enum ACTIONS_TYPE {
    FOLLOW_USER ='FOLLOW_USER',
    UNFOLLOW_USER = 'UNFOLLOW_USER',
    DELETE_USER = 'DELETE_USER',
    SET_USERS = 'SET_USERS',
    SHOW_MORE = 'SHOW_MORE'
}
// export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW_USER: {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: true} : u)}
        }
        case ACTIONS_TYPE.UNFOLLOW_USER: {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: false} : u)}
        }
        case ACTIONS_TYPE.SHOW_MORE:
            return {...state, count: state.count + 6}
        case ACTIONS_TYPE.SET_USERS:
            return {...state, users: [...action.payload.users]}
        case ACTIONS_TYPE.DELETE_USER:
            return {...state, users: state.users.filter(u=>u.id!==action.payload)}
        default:
            return state;
    }
}

type UsersActionsType = FollowACType | UnfollowACType | ShowMoreACType | SetUserACType | DeleteUserACType

type FollowACType = ReturnType<typeof followAC>
export const followAC = (id: number) => {
    return {
        type: ACTIONS_TYPE.FOLLOW_USER,
        payload: id
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: number) => {
    return {
        type: ACTIONS_TYPE.UNFOLLOW_USER,
        payload: id
    } as const
}

type ShowMoreACType = ReturnType<typeof showMoreAC>
export const showMoreAC = () => {
    return {
        type: ACTIONS_TYPE.SHOW_MORE
    } as const
}


type SetUserACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: ACTIONS_TYPE.SET_USERS,
        payload: {
            users
        }
    } as const
}


type DeleteUserACType = ReturnType<typeof deleteUserAC>
export const deleteUserAC = (id: number) => {
    return {
        type: ACTIONS_TYPE.DELETE_USER,
        payload: id
    } as const
}

export default usersReducer;