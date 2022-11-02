import {rerenderEntireTree} from '../render';

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
    posts: PostType[]
    facts: FactType[]
}
export type DialogsPageType = {
    dialogs: DialogType[]
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
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you!'},
            {id: 3, message: "I'm fine, and you?",},
            {id: 4, message: "Let's make some styles!",},
            {id: 4, message: "Here we go!",},
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

export const addPost = (post: string) => {
    let newPost: PostType = {
        id: state.profilePage.posts.length + 1,
        title: `Post ${state.profilePage.posts.length + 1}`,
        description: post,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export const addMessage = (message: string) => {
    debugger
    let newMessage: MessageType = {id: state.dialogsPage.messages.length + 1, message: message}
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state)
}

export default state;