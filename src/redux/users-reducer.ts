import {v1} from "uuid";

type LocationType = {
    city: string
    country: string
}

type UserType = {
    id: string
    fullName: string
    status: string
    location: LocationType
    followed: boolean
}

const initialState = {
    users: [
        {
            id: v1(),
            fullName: 'Egor K',
            status: 'Studying!',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: false
        },
        {
            id: v1(),
            fullName: 'Anton K',
            status: 'Working in Alpha Bank',
            location: {city: 'St.Petersburg', country: 'Russia'},
            followed: true
        },
        {
            id: v1(),
            fullName: 'Daniil K',
            status: 'Playing toys %)',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: true
        },
        {
            id: v1(),
            fullName: 'Katerina K',
            status: 'Cooking',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: false
        },
        {
            id: v1(),
            fullName: 'Nikita P',
            status: 'Reading book',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: false
        },
        {
            id: v1(),
            fullName: 'Vadim T',
            status: 'Selling cars',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: true
        },
        {
            id: v1(),
            fullName: 'Kim G',
            status: 'Learning about Redux',
            location: {city: 'Gomel', country: 'Belarus'},
            followed: false
        },
        {
            id: v1(),
            fullName: 'Denis K',
            status: 'Working hard...',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: false
        },
    ] as UserType[],
    count: 2,
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW_USER": {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW_USER": {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: false} : u)}
        }
        case "SHOW-MORE":
            return {...state, count: state.count + 2}
        default:
            return state;
    }
}

type UsersActionsType = FollowACType | UnfollowACType | ShowMoreACType

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