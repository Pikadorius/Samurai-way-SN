import React, {useEffect, useState} from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {NavbarType} from './NavbarContainer';
import {FriendsServerType, usersAPI} from '../../api/API';
import dafaultAvatar from '../../assets/images/defaultUsersAvatar.jpg'

const Navbar: React.FC<NavbarType> = ({authUserId, isAuth, setProfile, setStatus}) => {
    const myProfileId = '' + authUserId;
    const setMyProfile = () => {
        setProfile(myProfileId)
        setStatus(+myProfileId)
    }

    const [friends, setFriends] = useState<FriendsServerType[]>([])


    useEffect(() => {
        usersAPI.getFriends().then(res => {
            debugger
            setFriends(res.data.items)
        })
    }, [])

    return (
        <nav className={s.sidebar}>
            {!isAuth && <div className={s.item}>
                <NavLink to={'/login'} activeClassName={s.activeLink}>Login</NavLink>
            </div>}
            <div className={s.item} onClick={setMyProfile}>
                <NavLink to={'/profile/26933'} activeClassName={s.activeLink}>My profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
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
                <h2>My friends:</h2>
                <div className={s.friendsList}>
                    {friends.map(f => {
                        return (
                            <div key={f.id} className={s.friend} onClick={() => setProfile("" + f.id)}>
                                <img src={f.photos.small ? f.photos.small : dafaultAvatar} alt={"Friends avatar"}/>
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