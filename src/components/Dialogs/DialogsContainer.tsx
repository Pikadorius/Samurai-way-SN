import React from 'react';
import {addMessageActionCreator, setMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from './Dialogs';
import {StateType} from '../../redux/redux-store';
import {connect} from "react-redux";

/*
type DialogsType = {
    store: StoreType
}

const superDialogsContainer: React.FC<DialogsType> = (props) => {

    const DialogsState = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const setMessage = (message: string) => {
        props.store.dispatch(setMessageActionCreator(message))
    }

    return <Dialogs dialogsState={DialogsState.dialogsPage} addMessage={addMessage} setMessage={setMessage}/>
};*/

const mapStateToProps = (state: StateType) => {
    return {
        dialogsState: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        addMessage: ()=> {dispatch(addMessageActionCreator())},
        setMessage: (message:string)=> {dispatch(setMessageActionCreator(message))}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;