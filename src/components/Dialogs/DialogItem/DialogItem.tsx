import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../redux/state';


const DialogItem:React.FC<DialogType> = ({id, name, avatar}) => {
    const path = '/dialogs/' + id;

    return (
        <div className={s.dialog}><img src={avatar} alt={"Avatar"}/><NavLink to={path} activeClassName={s.active}>{name}</NavLink></div>
    )
}

export default DialogItem;