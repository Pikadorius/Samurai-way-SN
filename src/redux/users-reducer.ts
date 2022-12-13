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

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const initialState:InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2
}

export const enum ACTIONS_TYPE {
    FOLLOW_USER ='FOLLOW_USER',
    UNFOLLOW_USER = 'UNFOLLOW_USER',
    DELETE_USER = 'DELETE_USER',
    SET_USERS = 'SET_USERS',
    SHOW_MORE = 'SHOW_MORE',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS = 'SET_TOTAL_USERS_COUNT'
}

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW_USER: {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: true} : u)}
        }
        case ACTIONS_TYPE.UNFOLLOW_USER: {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: false} : u)}
        }
        case ACTIONS_TYPE.SET_USERS:
            return {...state, users: [...action.payload.users]}
        case ACTIONS_TYPE.DELETE_USER:
            return {...state, users: state.users.filter(u=>u.id!==action.payload)}
        case ACTIONS_TYPE.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.pageNumber}
        }
        case ACTIONS_TYPE.SET_TOTAL_USERS: {
            return {...state, totalUsersCount:action.payload.totalCount}
        }
        default:
            return state;
    }
}

type UsersActionsType = FollowACType | UnfollowACType | SetUserACType | DeleteUserACType | SetCurrentPageType | SetTotalUsersCountType

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

type SetUserACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: ACTIONS_TYPE.SET_USERS,
        payload: {
            users
        }
    } as const
}

type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (pageNumber:number) => {
    return {
        type: ACTIONS_TYPE.SET_CURRENT_PAGE,
        payload: {
            pageNumber
        }
    } as const
}

type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: ACTIONS_TYPE.SET_TOTAL_USERS,
        payload: {
            totalCount
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