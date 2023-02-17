import {v1} from 'uuid';

type TrackType = {
    id: string
    trackPerformer: string
    trackName: string
}

export type InitialStateType = {
    tracks: TrackType[]
    newTrackPerformer: string
    newTrackName: string
}

type ActionType = DeleteTrackType | AddTrackType | SearchTrackType | SetTrackPerformerType | SetTrackNameType

const initialState:InitialStateType= {
    tracks: [
        {id:v1(),trackPerformer:'Bad Omens', trackName: 'Villian'},
        {id:v1(),trackPerformer:'BMTH', trackName: 'True friend'},
        {id:v1(),trackPerformer:'Architects', trackName: 'Animal'},
    ],
    newTrackPerformer: '',
    newTrackName: ''
}


export const musicReducer = (state:InitialStateType=initialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case 'DELETE_TRACK': {
            return {...state, tracks: state.tracks.filter(t=>t.id!==action.payload.id)}
        }
        case 'SET_NEW_PERF': {
            return {...state, newTrackPerformer:action.payload.newTrackPerformer}
        }
        case 'SET_NEW_NAME': {
            return {...state, newTrackName:action.payload.newTrackName}
        }

        case 'ADD_TRACK': {
            if (state.newTrackName!=='' && state.newTrackPerformer!=='') {
                let newTrack={id:v1(), trackPerformer: state.newTrackPerformer, trackName: state.newTrackName}
                return {...state, tracks: [...state.tracks,newTrack], newTrackName: '', newTrackPerformer: ''}
            }
            else {
                return state
            }
        }
        default: return state
    }
}


type DeleteTrackType = ReturnType<typeof deleteTrackAC>
export const deleteTrackAC = (id:string) => {
    return {
        type: 'DELETE_TRACK',
        payload: {
            id
        }
    } as const
}

type SetTrackPerformerType = ReturnType<typeof setTrackPerformerAC>
export const setTrackPerformerAC = (newTrackPerformer: string) => {
    return {
        type: 'SET_NEW_PERF',
        payload: {
            newTrackPerformer
        }
    } as const
}

type SetTrackNameType = ReturnType<typeof setTrackNameAC>
export const setTrackNameAC = (newTrackName: string) => {
    return {
        type: 'SET_NEW_NAME',
        payload: {
            newTrackName
        }
    } as const
}


type AddTrackType = ReturnType<typeof addTrackAC>
export const addTrackAC = () => {
    return {
        type: 'ADD_TRACK'
    } as const
}

type SearchTrackType = ReturnType<typeof searchTrackAC>
export const searchTrackAC = (newTrackPerformer: string, newTrackName: string) => {
    return {
        type: 'SEARCH_TRACK',
        payload: {
            newTrackPerformer,
            newTrackName
        }
    } as const
}