import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from '../../../redux/state';


const Message:React.FC<MessageType> = ({id,message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export default Message;