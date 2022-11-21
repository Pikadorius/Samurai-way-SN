import {ActionsType, DialogsPageType, MessageType} from "./store";

const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {

    const ADD_MESSAGE = 'ADD-NEW-MESSAGE'
    const SET_MESSAGE = 'SET-MESSAGE-TEXT'

    if (action.type === ADD_MESSAGE) {
        let newMessage: MessageType = {
            id: state.messages.length + 1,
            message: state.newMessageText
        }
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === SET_MESSAGE) {
        state.newMessageText = action.newMessageText;
    }


    return state;
}