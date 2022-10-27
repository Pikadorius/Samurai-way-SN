import React from 'react';
import s from './Dialogs.module.css'
import Message, {MessageType} from './Message/Message';
import DialogItem, {DialogItemType} from './DialogItem/DialogItem';


type DialogsType = {
    dialogsData: DialogItemType[]
    messagesData: MessageType[]
}

const Dialogs: React.FC<DialogsType> = ({dialogsData, messagesData}) => {

    const dialogsElements = dialogsData.map(d => <DialogItem user={d.user} userId={d.userId}/>)
    const messagesElements = messagesData.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;