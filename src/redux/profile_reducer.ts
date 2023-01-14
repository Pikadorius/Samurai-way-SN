import {Dispatch} from 'redux';
import {profileAPI} from '../API/API';

export type ProfileActionsType =
    ReturnType<typeof addPost> |
    ReturnType<typeof addLike> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserStatus>

export type PostType = {
    id: number
    title: string
    description: string
    likesCount: number
}
type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ServerProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const initialState:InitialStateType = {
    posts: [
        {id: 1, title: "My  first post", description: "I try to set props to my first post...", likesCount: 0},
        {
            id: 2,
            title: "It works, I'm very excited!",
            description: "Hmmm... I really enjoy the result!",
            likesCount: 0
        },
        {id: 3, title: "Dimych is the best!", description: "Dimych has a talent to teach", likesCount: 10}
    ] as PostType[],
    profile: null,
    profileStatus: ''
}

export type InitialStateType = {
    posts: PostType[]
    profile: ServerProfileType | null
    profileStatus: string
}
// export type InitialStateType = typeof initialState


const enum ACTION_TYPES  {
    ADD_POST='ADD-NEW-POST',
    ADD_LIKE='ADD-LIKE',
    SET_USER_PROFILE='SET_USER_PROFILE',
    SET_USER_STATUS='SET_USER_STATUS'
}


const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-NEW-POST':
            let newPost: PostType = {
                id: state.posts.length + 1,
                title: `Post ${state.posts.length + 1}`,
                description: action.payload.newPost,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        case 'ADD-LIKE':
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.postId ? {...p, likesCount: p.likesCount + 1} : p)
            };
        case ACTION_TYPES.SET_USER_PROFILE: {
            return {...state, profile: action.payload.profile};
        }
        case ACTION_TYPES.SET_USER_STATUS: {
            return {...state, profileStatus: action.payload.status}
        }
        default:
            return state;
    }
}

export const addPost = (newPost: string) => {
    return {type: ACTION_TYPES.ADD_POST, payload:{newPost}} as const
}
export const addLike = (postId: number) => {
    return {type: ACTION_TYPES.ADD_LIKE, postId} as const
}
export const setUserProfile = (profile: ServerProfileType) => {
    return {
        type: ACTION_TYPES.SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: ACTION_TYPES.SET_USER_STATUS,
        payload: {
            status
        }
    } as const
}


export type SetProfileTCType = (userId:string)=>void
export const setProfile:SetProfileTCType = (userId)=>(dispatch:Dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data))
    })
}

export type SetProfileStatusTCType = (userId:number)=>void
export const setStatus:SetProfileStatusTCType = (userId)=>(dispatch:Dispatch) => {
    profileAPI.getUsersStatus(userId).then((data) => {
        dispatch(setUserStatus(data))
    })
}

export type UpdateStatusTCType = (newStatus: string) => void
export const updateStatus:UpdateStatusTCType = (newStatus)=>(dispatch:Dispatch)=>{
    profileAPI.updateMyStatus(newStatus).then(data=>{
        if (data.resultCode===0) {
           dispatch(setUserStatus(newStatus))
        }
        else alert(`ERROR OCCURED: ${data.messages[0]}`)
    })
}

//редьюсеры эскпортируем по умолчанию
export default profileReducer;