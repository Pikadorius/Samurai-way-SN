import {ActionsType, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-NEW-POST'
const SET_POST_TEXT = 'SET-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'

const profileReducer = (state: ProfilePageType, action: ActionsType):ProfilePageType => {

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
export const addLIkeActionCreator = (postId: number) => {
    return {type: ADD_LIKE, postId} as const
}

//редьюсеры эскпортируем по умолчанию
export default profileReducer;