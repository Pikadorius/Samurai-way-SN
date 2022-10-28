import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../redux/state';


const DialogItem:React.FC<DialogType> = ({id, name}) => {
    const path = '/dialogs/' + id;

    return (
        <div className={s.dialog}><NavLink to={path} activeClassName={s.active}>{name}</NavLink></div>
    )
}

export default DialogItem;