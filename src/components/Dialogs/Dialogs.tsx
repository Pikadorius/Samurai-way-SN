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
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem user={"Dimych"} userId={1}/>
                <DialogItem user={"Petya"} userId={2}/>
                <DialogItem user={"Anton"} userId={3}/>
                <DialogItem user={"Andrew"} userId={4}/>
                <DialogItem user={"Sveta"} userId={5}/>
                <DialogItem user={"Kate"} userId={6}/>
                <DialogItem user={"Nikita"} userId={7}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hello!"} />
                <Message message={"How are you!"} />
                <Message message={"I'm fine, and you?"} />
                <Message message={"Cool!"} />
            </div>
        </div>
    );
};

export default Dialogs;