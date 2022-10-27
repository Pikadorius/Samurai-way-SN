type PostType = {
    id: number
    title: string
    description: string
    likesCount: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

type ProfilePageTypes = {
    posts: PostType[]
}
type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type SidebarType = {}

type RootStateType ={
    profilePage: ProfilePageTypes
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}



const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, title: "My  first post", description: "I try to set props to my firts post...", likesCount: 0},
            {id: 2, title: "It works, I'm very excited!", description: "Hmmm... I really enjoy the result!", likesCount: 0},
            {id: 3, title: "Dimych is the best!", description: "Dimych has a talant to teach", likesCount: 10}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Kate'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Artemiy'},
            {id: 4, name: 'Nikita'},
            {id: 5, name: 'Denis'},
            {id: 6, name: 'Alexey'},
            {id: 7, name: 'Andrew'},
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you!'},
            {id: 3, message: "I'm fine, and you?",},
        ]
    },
    sidebar: {}
}

export default state;