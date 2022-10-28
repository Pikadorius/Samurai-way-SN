import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export type DialogItemType = {
    id: number
    name: string
}

const DialogItem:React.FC<DialogItemType> = ({id, name}) => {
    const path = '/dialogs/' + id;

    return (
        <div className={s.dialog}><NavLink to={path} activeClassName={s.active}>{name}</NavLink></div>
    )
}

export default DialogItem;