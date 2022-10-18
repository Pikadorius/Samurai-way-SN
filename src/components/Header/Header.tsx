import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img width={'200px'} src="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png" alt="" />
        </header>
    )
}

export default Header;