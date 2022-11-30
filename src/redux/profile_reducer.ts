export type FactType = {
    id: number
    fact: string
}
export type PostType = {
    id: number
    title: string
    description: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string,
    posts: PostType[]
    facts: FactType[]
}

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof setPostActionCreator>|
    ReturnType<typeof addLikeActionCreator>

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

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-NEW-POST':
            let newPost: PostType = {
                id: state.posts.length + 1,
                title: `Post ${state.posts.length + 1}`,
                description: state.newPostText,
                likesCount: 0
            };
            return {...state, newPostText:'', posts:[...state.posts, newPost]};
        case 'SET-POST-TEXT':
            return {...state, newPostText: action.newPostText}
        case 'ADD-LIKE':
            return {...state, posts:state.posts.map(p => p.id === action.postId ? {...p, likesCount: p.likesCount+1} : p)};
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: 'ADD-NEW-POST'} as const
}

export const setPostActionCreator = (newPostText: string) => {
    return {type: 'SET-POST-TEXT', newPostText: newPostText} as const
}
export const addLikeActionCreator = (postId: number) => {
    return {type: 'ADD-LIKE', postId} as const
}

//редьюсеры эскпортируем по умолчанию
export default profileReducer;