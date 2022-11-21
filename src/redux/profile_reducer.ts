import {ActionsType, PostType, ProfilePageType} from "./store";

const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {

    const ADD_POST = 'ADD-NEW-POST'
    const SET_POST_TEXT = 'SET-POST-TEXT'
    const ADD_LIKE = 'ADD-LIKE'

    if (action.type === ADD_POST) {
        let newPost: PostType = {
            id: state.posts.length + 1,
            title: `Post ${state.posts.length + 1}`,
            description: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = "";
    } else if (action.type === SET_POST_TEXT) {
        state.newPostText = action.newPostText;

    } else if (action.type === ADD_LIKE) {
        state.posts.map(p => p.id === action.postId ? p.likesCount++ : p);
    }

    return state;
}

//редьюсеры эскпортируем по умолчанию
export default profileReducer;