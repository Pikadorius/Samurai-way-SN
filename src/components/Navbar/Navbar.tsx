import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {SidebarType} from '../../redux/state';

const Navbar: React.FC<SidebarType> = ({friends}) => {
    return (
        <nav className={s.sidebar}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.friends}>
                <h2>My best friends:</h2>
                <div className={s.friendsList}>
                    {friends.map(f => {
                        return (
                            <div key={f.id} className={s.friend}>
                                <img src={f.avatar} alt={"Friends avatar"}/>
                                {f.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;