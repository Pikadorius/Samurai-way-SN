import React from 'react';
import {ActionsType, DialogsPageType} from '../../redux/store';
import {addMessageActionCreator, setMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from './Dialogs';

type DialogsType = {
    dialogsState: DialogsPageType
    dispatch: (action: ActionsType) => void
}

const DialogsContainer: React.FC<DialogsType> = ({dialogsState, dispatch}) => {

    const addMessage = () => {
        dispatch(addMessageActionCreator())
    }

    const setMessage = (message: string) => {
        dispatch(setMessageActionCreator(message))
    }

    return <Dialogs dialogsState={dialogsState} addMessage={addMessage} setMessage={setMessage}/>
};

export default DialogsContainer;