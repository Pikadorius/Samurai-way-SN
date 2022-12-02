import {v1} from "uuid";

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    fullName: string
    status: string
    location: LocationType
    followed: boolean
    photoURL: string
}


const initialState:InitialStateType = {
    users: [],
    count: 6,
}

export type InitialStateType = {
    users: UserType[],
    count: number
}

// export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW_USER": {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW_USER": {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: false} : u)}
        }
        case "SHOW-MORE":
            return {...state, count: state.count + 6}
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.payload.newState]}
        case 'DELETE-USER':
            return {...state, users: state.users.filter(u=>u.id!==action.payload)}
        default:
            return state;
    }
}

type UsersActionsType = FollowACType | UnfollowACType | ShowMoreACType | SetUserACType | DeleteUserACType

type FollowACType = ReturnType<typeof followAC>
export const followAC = (id: string) => {
    return {
        type: 'FOLLOW_USER',
        payload: id
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: string) => {
    return {
        type: 'UNFOLLOW_USER',
        payload: id
    } as const
}

type ShowMoreACType = ReturnType<typeof showMoreAC>
export const showMoreAC = () => {
    return {
        type: 'SHOW-MORE'
    } as const
}


type SetUserACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        payload: {
            newState: users
        }
    } as const
}


type DeleteUserACType = ReturnType<typeof deleteUserAC>
export const deleteUserAC = (id: string) => {
    return {
        type: 'DELETE-USER',
        payload: id
    } as const
}

export default usersReducer;