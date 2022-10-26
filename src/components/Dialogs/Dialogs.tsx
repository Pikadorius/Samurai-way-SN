import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export type DialogItemType = {
    user: string
    userId: number

}
const DialogItem = (props: DialogItemType) => {
    const path = '/dialogs/' + props.userId;

    return (
        <div className={s.dialog}><NavLink to={path} activeClassName={s.active}>{props.user}</NavLink></div>
    )
}


export type MessageType = {
    id: number
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

type DialogsType = {
    dialogsData: DialogItemType[]
    messagesData: MessageType[]
}

const Dialogs:React.FC<DialogsType>= ({dialogsData,messagesData}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                    dialogsData.map(i=><DialogItem user={i.user} userId={i.userId}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(i=><Message message={i.message} id={i.id}/>)
                }
            </div>
        </div>
    );
};

export default Dialogs;