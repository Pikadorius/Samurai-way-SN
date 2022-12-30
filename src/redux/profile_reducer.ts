import {Dispatch} from 'redux';
import {profileAPI} from '../API/API';

export type ProfileActionsType =
    ReturnType<typeof addPost> |
    ReturnType<typeof setPost> |
    ReturnType<typeof addLike> |
    ReturnType<typeof setUserProfile>

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

const initialState = {
    newPostText: '',
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
    profile: null
}

export type InitialStateType = {
    newPostText: string
    posts: PostType[]
    profile: ServerProfileType | null
}
// export type InitialStateType = typeof initialState


const enum ACTION_TYPES  {
    ADD_POST='ADD-NEW-POST',
    SET_POST='SET-POST-TEXT',
    ADD_LIKE='ADD-LIKE',
    SET_USER_PROFILE='SET_USER_PROFILE'
}


const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-NEW-POST':
            let newPost: PostType = {
                id: state.posts.length + 1,
                title: `Post ${state.posts.length + 1}`,
                description: state.newPostText,
                likesCount: 0
            };
            return {...state, newPostText: '', posts: [...state.posts, newPost]};
        case 'SET-POST-TEXT':
            return {...state, newPostText: action.newPostText}
        case 'ADD-LIKE':
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.postId ? {...p, likesCount: p.likesCount + 1} : p)
            };
        case ACTION_TYPES.SET_USER_PROFILE: {
            return {...state, profile: action.payload.profile};
        }
        default:
            return state;
    }
}

export const addPost = () => {
    return {type: ACTION_TYPES.ADD_POST} as const
}

export const setPost = (newPostText: string) => {
    return {type: ACTION_TYPES.SET_POST, newPostText: newPostText} as const
}
export const addLike = (postId: number) => {
    return {type: ACTION_TYPES.ADD_LIKE, postId} as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: ACTION_TYPES.SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}


export type SetProfileTCType = (userId:string)=>void
export const setProfile:SetProfileTCType = (userId)=>(dispatch:Dispatch) => {
    profileAPI.showUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data))
    })
}

//редьюсеры эскпортируем по умолчанию
export default profileReducer;