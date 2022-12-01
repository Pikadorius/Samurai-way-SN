export type DialogsActionsType =
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof setMessageActionCreator>

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
    avatar: string
}

const initialState = {
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
    ] as DialogType[],
    newMessageText: '',
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you!'},
        {id: 3, message: "I'm fine, and you?",},
        {id: 4, message: "Let's make some styles!",},
        {id: 5, message: "Here we go!",},
    ] as MessageType[]
}


export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            let newMessage: MessageType = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            // state.messages.push(newMessage);
            // state.newMessageText = '';
            // return state;
            return {...state, newMessageText: '', messages: [...state.messages, newMessage]}
        case 'SET-MESSAGE-TEXT':
            return {...state, newMessageText: action.newMessageText}
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {type: 'ADD-NEW-MESSAGE'} as const
}

export const setMessageActionCreator = (newMessageText: string) => {
    return {type: 'SET-MESSAGE-TEXT', newMessageText: newMessageText} as const
}

//редьюсеры эскпортируем по умолчанию
export default dialogsReducer;