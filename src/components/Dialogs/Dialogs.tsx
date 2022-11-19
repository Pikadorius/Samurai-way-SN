import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {ActionsType, addMessageActionCreator, DialogsPageType, setMessageActionCreator} from '../../redux/state';

type DialogsType = {
    dialogsState: DialogsPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs: React.FC<DialogsType> = ({dialogsState, dispatch}) => {

    const dialogsElements = dialogsState.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                      avatar={d.avatar}/>)
    const messagesElements = dialogsState.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let messageRef = React.createRef<HTMLTextAreaElement>();

    const addNewMessageCallback = () => {
        let newMessage = messageRef.current?.value
        newMessage && dispatch(addMessageActionCreator())
    }

    let messageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={messageRef} value={dialogsState.newMessageText} onChange={messageOnChange}/>
                    <button onClick={addNewMessageCallback}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;