import React from 'react';
import {addMessageActionCreator, setMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from './Dialogs';
import {StoreType} from '../../redux/redux-store';

type DialogsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsType> = (props) => {

    const DialogsState = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const setMessage = (message: string) => {
        props.store.dispatch(setMessageActionCreator(message))
    }

    return <Dialogs dialogsState={DialogsState.dialogsPage} addMessage={addMessage} setMessage={setMessage}/>
};

export default DialogsContainer;