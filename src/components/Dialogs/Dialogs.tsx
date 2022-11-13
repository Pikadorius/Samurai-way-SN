import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/state';

type DialogsType = {
    dialogsState: DialogsPageType
    setNewMessageText: (text: string)=> void
    addMessage: (message: string) => void
}

const Dialogs: React.FC<DialogsType> = ({dialogsState,setNewMessageText, addMessage}) => {

    const dialogsElements = dialogsState.dialogs.map(d => <DialogItem  key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>)
    const messagesElements = dialogsState.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let messageRef = React.createRef<HTMLTextAreaElement>();

    const addNewMessage = () => {
        debugger
        let newMessage = messageRef.current?.value
        newMessage && addMessage(newMessage)
    }

    let messageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={messageRef} value={dialogsState.newMessage} onChange={messageOnChange}/>
                    <button onClick={addNewMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;