import {ActionsType, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-NEW-POST'
const SET_POST_TEXT = 'SET-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'

const initialState: ProfilePageType = {
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
    ],
    facts: [
        {id: 1, fact: 'I am 30 years old'},
        {id: 2, fact: 'I have a son'},
        {id: 3, fact: 'I am a Chief Engineer'},

    ]
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: state.posts.length + 1,
                title: `Post ${state.posts.length + 1}`,
                description: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case SET_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        case ADD_LIKE:
            state.posts.map(p => p.id === action.postId ? p.likesCount++ : p);
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}

export const setPostActionCreator = (newPostText: string) => {
    return {type: SET_POST_TEXT, newPostText: newPostText} as const
}
export const addLikeActionCreator = (postId: number) => {
    return {type: ADD_LIKE, postId} as const
}

//редьюсеры эскпортируем по умолчанию
export default profileReducer;