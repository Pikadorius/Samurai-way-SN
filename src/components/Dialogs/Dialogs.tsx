import React from 'react';
import s from './Dialogs.module.css'
import {DialogsPageType} from '../../redux/state';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs: React.FC<DialogsPageType> = ({dialogs, messages}) => {

    const dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    const messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)

    const messageRef = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        let newMessage = messageRef.current?.value
        alert(newMessage)
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
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;