import React from 'react';
import s from './Navbar.module.css';

console.log(s)

const Navbar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={`${s.item} ${s.active}`}><a href={'/profile'}>Profile</a></div>
            <div className={s.item}><a href={'/dialogs'}>Dialogs</a></div>
            <div className={s.item}><a href={'/news'}>News</a></div>
            <div className={s.item}><a href={'/music'}>Music</a></div>
            <div className={s.item}><a href={'/settings'}>Settings</a></div>
        </nav>
    );
};

export default Navbar;