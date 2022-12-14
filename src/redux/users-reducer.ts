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
    isFetching: boolean
}
const initialState:InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const enum ACTIONS_TYPE {
    FOLLOW_USER ='FOLLOW_USER',
    UNFOLLOW_USER = 'UNFOLLOW_USER',
    DELETE_USER = 'DELETE_USER',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS = 'SET_TOTAL_USERS_COUNT',
    SET_IS_FETCHING = 'SET_IS_FETCHING'
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
        case ACTIONS_TYPE.SET_IS_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        default:
            return state;
    }
}

type UsersActionsType =
    FollowACType |
    UnfollowACType |
    SetUserACType |
    DeleteUserACType |
    SetCurrentPageType |
    SetTotalUsersCountType |
    SetIsFetchingType

type DeleteUserACType = ReturnType<typeof deleteUser>
export const deleteUser = (id: number) => {
    return {
        type: ACTIONS_TYPE.DELETE_USER,
        payload: id
    } as const
}

type FollowACType = ReturnType<typeof follow>
export const follow = (id: number) => {
    return {
        type: ACTIONS_TYPE.FOLLOW_USER,
        payload: id
    } as const
}

type UnfollowACType = ReturnType<typeof unfollow>
export const unfollow = (id: number) => {
    return {
        type: ACTIONS_TYPE.UNFOLLOW_USER,
        payload: id
    } as const
}

type SetUserACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
    return {
        type: ACTIONS_TYPE.SET_USERS,
        payload: {
            users
        }
    } as const
}

type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (pageNumber:number) => {
    return {
        type: ACTIONS_TYPE.SET_CURRENT_PAGE,
        payload: {
            pageNumber
        }
    } as const
}

type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: ACTIONS_TYPE.SET_TOTAL_USERS,
        payload: {
            totalCount
        }
    } as const
}

type SetIsFetchingType = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}



export default usersReducer;