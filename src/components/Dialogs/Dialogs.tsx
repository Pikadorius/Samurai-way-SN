import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsType> = ({dialogsState, addMessage, setMessage, deleteMessage}) => {

    const dialogsElements = dialogsState.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                      avatar={d.avatar}/>)
    const messagesElements = dialogsState.messages.map(m => <Message key={m.id} id={m.id} message={m.message} onClick={()=>deleteMessage(m.id)}/>)

    const onClickAddMessage= () => {
        addMessage()
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={dialogsState.newMessageText} onChange={onChangeMessageHandler} placeholder={'Enter new message...'}/>
                    <button onClick={onClickAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;