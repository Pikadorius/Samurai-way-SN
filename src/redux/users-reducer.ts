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
}

const initialState = {
    users: [
        {id: v1(),fullName:'Egor K',status: 'Studying!',location: {city:'Minsk', country: 'Belarus'}},
        {id: v1(),fullName:'Anton K',status: 'Working in Alpha Bank!',location: {city:'St.Petersburg', country: 'Russia'}},
        {id: v1(),fullName:'Daniil K',status: 'Playing toys!',location: {city:'Minsk', country: 'Belarus'}}
    ] as UserType[]
}

export type InitialStateType = typeof initialState

export const usersReducer=(state: InitialStateType = initialState, action: any):InitialStateType=> {
    return {...state}
}