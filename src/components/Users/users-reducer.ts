import {Dispatch} from 'redux';
import {usersAPI} from '../../api/API';

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
    followingInProgress: number[]
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const enum ACTIONS_TYPE {
    FOLLOW_USER = 'FOLLOW_USER',
    UNFOLLOW_USER = 'UNFOLLOW_USER',
    DELETE_USER = 'DELETE_USER',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS = 'SET_TOTAL_USERS_COUNT',
    SET_IS_FETCHING = 'SET_IS_FETCHING',
    SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS'
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
            return {...state, users: state.users.filter(u => u.id !== action.payload)}
        case ACTIONS_TYPE.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.pageNumber}
        }
        case ACTIONS_TYPE.SET_TOTAL_USERS: {
            return {...state, totalUsersCount: action.payload.totalCount}
        }
        case ACTIONS_TYPE.SET_IS_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        case ACTIONS_TYPE.SET_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.payload.inProgress ?
                    [...state.followingInProgress, action.payload.userId] :
                    state.followingInProgress.filter(u => u !== action.payload.userId)
            }
        }
        default:
            return state;
    }
}

type UsersActionsType =
    FollowACType |
    UnfollowACType |
    SetFollowingInProgressACType |
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

type SetFollowingInProgressACType = ReturnType<typeof setFollowingInProgress>
export const setFollowingInProgress = (inProgress: boolean, userId: number) => {
    return {
        type: ACTIONS_TYPE.SET_FOLLOWING_IN_PROGRESS,
        payload: {
            inProgress,
            userId
        }
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
export const setCurrentPage = (pageNumber: number) => {
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

export type GetUsersTCType = (currentPage: number, pageSize: number) => void
export const getUsers: GetUsersTCType = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }).catch()
}

export type FollowTCType = (id: number) => void
export const followSuccess: FollowTCType = (id) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, id))
    // u.followed ? props.unfollow(u.id) : props.follow(u.id)
        usersAPI.followUser(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(setFollowingInProgress(false, id))
        })
    }

export const unfollowSuccess: FollowTCType = (id) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, id))
    usersAPI.unfollowUser(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unfollow(id))
        }
        dispatch(setFollowingInProgress(false, id))
    })
}


export type OnPageChangedTCType = (p: number, pageSize: number) => void
export const  onPageChanged:OnPageChangedTCType = (p, pageSize) => (dispatch: Dispatch) => {
    dispatch(setCurrentPage(p))
    dispatch(setIsFetching(true))
    usersAPI.getUsers(p, pageSize).then((data) => {
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
    })
}

export default usersReducer;