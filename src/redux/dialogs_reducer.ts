import {ActionsType, DialogsPageType, MessageType} from "./store";

const ADD_MESSAGE = 'ADD-NEW-MESSAGE'
const SET_MESSAGE = 'SET-MESSAGE-TEXT'

const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
            break;
        case SET_MESSAGE:
            state.newMessageText = action.newMessageText;
            return state;
            break;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}

export const setMessageActionCreator = (newMessageText: string) => {
    return {type: SET_MESSAGE, newMessageText: newMessageText} as const
}

//редьюсеры эскпортируем по умолчанию
export default dialogsReducer;