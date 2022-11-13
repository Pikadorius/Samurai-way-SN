import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/state';

type DialogsType = {
    dialogsState: DialogsPageType
    setNewMessageText: (text: string)=> void
    addNewMessage: () => void
}

const Dialogs: React.FC<DialogsType> = ({dialogsState,setNewMessageText, addNewMessage}) => {

    const dialogsElements = dialogsState.dialogs.map(d => <DialogItem  key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>)
    const messagesElements = dialogsState.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let messageRef = React.createRef<HTMLTextAreaElement>();

    const addNewMessageCallback = () => {
        let newMessage = messageRef.current?.value
        newMessage && addNewMessage()
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
                    <textarea ref={messageRef} value={dialogsState.newMessageText} onChange={messageOnChange}/>
                    <button onClick={addNewMessageCallback}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;