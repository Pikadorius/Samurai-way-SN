import React from 'react';
import s from './../Dialogs.module.css'
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

export default DialogItem;