import React from 'react';
import s from './../Dialogs.module.css'

type MessageType = {
    id: number
    message: string
    onClick?: () => void
}

const Message:React.FC<MessageType> = (props) => {
    return <div className={s.message}>{props.message}<button onClick={props.onClick}>x</button></div>
}

export default Message;