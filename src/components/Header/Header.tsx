import React from 'react';
import s from './Header.module.css';

type HeaderType = {
    list: Array<string>
}

const Header = ({list}: HeaderType) => {
    return (
        <header className={s.header}>
            <img width={'200px'} src="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png" alt="" />
            {list.map(i=>{
                return (
                    <div className={s.headerLinks}> <a href={"#"}>{i}</a> </div>
                )
            })}
        </header>
    )
}

export default Header;