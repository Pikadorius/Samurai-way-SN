import React from 'react';
import s from './../Dialogs.module.css'

export type MessageType = {
    id: number
    message: string
}
const Message:React.FC<MessageType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export default Message;