import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogItemType = {
    user: string
    userId: number

}
const DialogItem = (props: DialogItemType) => {
    const path = '/dialogs/' + props.userId;

    return (
        <div className={s.dialog}><NavLink to={path} activeClassName={s.active}>{props.user}</NavLink></div>
    )
}


type MessageType = {
    id: number
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const dialogsData: DialogItemType[] = [
    {user: 'Kate', userId: 1},
    {user: 'Dimych', userId: 2},
    {user: 'Petya', userId: 3},
    {user: 'Anton', userId: 4},
    {user: 'Sveta', userId: 5},
    {user: 'Andrew', userId: 6},
    {user: 'Nikita', userId: 7}
]

const messagesData: MessageType[] = [
    {message: 'Hi!', id: 1},
    {message: 'How are you!', id: 2},
    {message: "I'm fine, and you?", id: 3},
]


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem user={dialogsData[0].user} userId={dialogsData[0].userId}/>
                <DialogItem user={"Petya"} userId={2}/>
                <DialogItem user={"Anton"} userId={3}/>
                <DialogItem user={"Andrew"} userId={4}/>
                <DialogItem user={"Sveta"} userId={5}/>
                <DialogItem user={"Kate"} userId={6}/>
                <DialogItem user={"Nikita"} userId={7}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    );
};

export default Dialogs;