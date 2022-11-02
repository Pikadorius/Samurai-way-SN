import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogType, MessageType} from '../../redux/state';

type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    addMessage: (message: string) => void
}

const Dialogs: React.FC<DialogsType> = ({dialogs, messages, addMessage}) => {

    const dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    const messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)

    let messageRef = React.createRef<HTMLTextAreaElement>();

    const addNewMessage = () => {
        debugger
        let newMessage = messageRef.current?.value
        newMessage && addMessage(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={messageRef}></textarea>
                    <button onClick={addNewMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;