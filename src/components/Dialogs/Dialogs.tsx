import React, {FC} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsType} from "./DialogsContainer";
import {MessageFormRedux, MessageFormType} from './AddMessageForm/AddMessageForm';


const Dialogs: React.FC<DialogsType> = ({dialogsState, addMessage, deleteMessage}) => {

    const dialogsElements = dialogsState.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                      avatar={d.avatar}/>)
    const messagesElements = dialogsState.messages.map(m => <Message key={m.id} id={m.id} message={m.message}
                                                                     onClick={() => deleteMessage(m.id)}/>)


    const addNewMessage = (formData:MessageFormType) => {
        addMessage(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    {/*<textarea value={dialogsState.newMessageText} onChange={onChangeMessageHandler}
                              placeholder={'Enter new message...'}/>
                    <button onClick={onClickAddMessage}>Add message</button>*/}
                    <MessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;






