export type PostType = {
    id: number
    title: string
    description: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
}
export type FactType = {
    id: number
    fact: string
}
export type FriendType = {
    id: number
    name: string
    avatar: string
}


export type ProfilePageType = {
    newPostText: string,
    posts: PostType[]
    facts: FactType[]
}
export type DialogsPageType = {
    dialogs: DialogType[]
    newMessageText: string
    messages: MessageType[]
}
export type SidebarType = {
    friends: FriendType[]
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setPostActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof setMessageActionCreator>
    | ReturnType<typeof addLIkeActionCreator>

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
    // setNewMessageText: (newMessageText: string) => void
    // addNewMessage: () => void
    // setNewPostText: (newPostText: string) => void
    // addNewPost: () => void
    // addLikeForPost: (postsId: number) => void
}


//store
let store: StoreType = {
    // BLL / главный стейт
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Kate',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
                {
                    id: 2,
                    name: 'Anton',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
                {
                    id: 3,
                    name: 'Artemiy',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
                {
                    id: 4,
                    name: 'Nikita',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
                {
                    id: 5,
                    name: 'Denis',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
                {
                    id: 6,
                    name: 'Alexey',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
                {
                    id: 7,
                    name: 'Andrew',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
            ],
            newMessageText: '',
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you!'},
                {id: 3, message: "I'm fine, and you?",},
                {id: 4, message: "Let's make some styles!",},
                {id: 5, message: "Here we go!",},
            ]
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Anton",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Nikita",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
                {
                    id: 3,
                    name: "Andrew",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3jk5t5kR_i3IeLL1UosSLZmblcK4AhE1kQ&usqp=CAU"
                },
            ]
        }
    },
    // пустой метод, который потом будет перезаписываться
    _onChange() {
        console.log('State changed')
    },

    //"подписчик" передал "наблюдателя" за изменением стейта (в каждом методе store)
    subscribe(observer) {
        this._onChange = observer; // переопределение пустой функции на переданную
    },
    // получение state, т.к. напрямую к нему обращаться нельзя (условно, т.к. разработчик написал _state)
    getState() {
        return this._state
    },
    // ипспользвание функции через получение объекта action
    dispatch(action) {  // action - объект!! с обязательным свойством {type: 'addNewPost(как пример)')
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: this._state.profilePage.posts.length + 1,
                title: `Post ${this._state.profilePage.posts.length + 1}`,
                description: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._onChange()  // вызов функции из замыкания
        } else if (action.type === SET_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._onChange()  // вызов функции из замыкания
        } else if (action.type === ADD_MESSAGE) {
            let newMessage: MessageType = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._onChange()  // вызов функции из замыкания
        } else if (action.type === SET_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._onChange()  // вызов функции из замыкания
        } else if (action.type === ADD_LIKE) {
            this._state.profilePage.posts.map(p => p.id === action.postId ? p.likesCount++ : p);
            this._onChange()  // вызов функции из замыкания
        }
    }
}
const ADD_POST = 'ADD-NEW-POST'
const SET_POST_TEXT = 'SET-POST-TEXT'
const ADD_MESSAGE = 'ADD-NEW-MESSAGE'
const SET_MESSAGE = 'SET-MESSAGE-TEXT'
const ADD_LIKE = 'ADD-LIKE'

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}

export const setPostActionCreator = (newPostText: string) => {
    return {type: SET_POST_TEXT, newPostText: newPostText} as const
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}

export const setMessageActionCreator = (newMessageText: string) => {
    return {type: SET_MESSAGE, newMessageText: newMessageText} as const
}

export const addLIkeActionCreator = (postId: number) => {
    return {type: ADD_LIKE, postId} as const
}

export default store;
