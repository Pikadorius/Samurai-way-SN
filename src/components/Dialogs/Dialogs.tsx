import React from 'react';
import s from './Dialogs.module.css'
import {DialogsPageType} from '../../redux/state';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs: React.FC<DialogsPageType> = ({dialogs, messages}) => {

    const dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    const messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;