import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export type DialogItemType = {
    user: string
    userId: number
}

const DialogItem:React.FC<DialogItemType> = ({user, userId}) => {
    const path = '/dialogs/' + userId;

    return (
        <div className={s.dialog}><NavLink to={path} activeClassName={s.active}>{user}</NavLink></div>
    )
}

export default DialogItem;