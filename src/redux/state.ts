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

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

const state: StateType = {
    profilePage: {
        newPostText: '',
        posts: [
            {id: 1, title: "My  first post", description: "I try to set props to my firts post...", likesCount: 0},
            {
                id: 2,
                title: "It works, I'm very excited!",
                description: "Hmmm... I really enjoy the result!",
                likesCount: 0
            },
            {id: 3, title: "Dimych is the best!", description: "Dimych has a talant to teach", likesCount: 10}
        ],
        facts: [
            {id: 1, fact: 'I am 30 years old'},
            {id: 2, fact: 'I have a son'},
            {id: 3, fact: 'I am a Chief Engeneer'},

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
}

export const setNewMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText;
    onChange()  // вызов функции из замыкания
}
export const addNewMessage = () => {
    let newMessage: MessageType = {id: state.dialogsPage.messages.length + 1, message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    onChange()  // вызов функции из замыкания
}


export const setNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    onChange()  // вызов функции из замыкания
}
export const addNewPost = () => {
    let newPost: PostType = {
        id: state.profilePage.posts.length + 1,
        title: `Post ${state.profilePage.posts.length + 1}`,
        description: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    onChange()  // вызов функции из замыкания
}

export const addLikeForPost = (postsId: number) => {
    state.profilePage.posts.map(p => p.id === postsId ? p.likesCount++ : p);
    onChange()  // вызов функции из замыкания
}

let onChange = () => {}  // пустая функция, которая потом будет перезаписываться (из-за этого объявлена через let)

export const subscribe = (observer: () => void) => {   //"подписчик" передал "наблюдателя" за изменением стейта (в каждой логической функции стейта)
    onChange = observer; // переопределение пустой функции на переданную
}




export default state;