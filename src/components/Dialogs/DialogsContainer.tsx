import React, {ComponentType} from 'react';
import {
    addMessageActionCreator,
    deleteMessageAC,
    InitialStateType,
} from "./dialogs_reducer";
import Dialogs from './Dialogs';
import {StateType} from '../../bll/redux-store';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from '../../HOCs/WithAuthRedirect';

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

type MapStatePropsType = {
    dialogsState: InitialStateType
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        dialogsState: state.dialogsPage
    }
}

type MapDispatchPropsType = {
    addMessage: (newMessage: string) => void
    deleteMessage: (id: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage))
        },
        deleteMessage: (id: number) => {
            dispatch(deleteMessageAC(id))
        }
    }
}

export type DialogsType = MapStatePropsType & MapDispatchPropsType

// const AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)