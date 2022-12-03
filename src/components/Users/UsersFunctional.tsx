import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios';
import avatar from '../../assets/images/defaultUsersAvatar.jpg'

const UsersFunctional: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, showMore, setUsers, deleteUser}) => {

    const filteredUser = usersPage.users.filter((u, i) => i < usersPage.count)

    const getUsers = () => {

        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            debugger
            usersPage.users.length ? alert('No more new users') : setUsers(response.data.items)
        })

    }

    const showMoreHandler = () => {
        showMore()
    }


    return (
        <div>
            <div className={s.usersField}>

                {filteredUser.map(u => {

                    const followHandler = () => {
                        u.followed ? unfollow(u.id) : follow(u.id)
                    }

                    const userClassName = u.followed ? `${s.userItem} ${s.followed}` : s.userItem

                    return <div className={userClassName} key={u.id}>
                        <div className={s.about}>
                            <div className={s.userAvatar}><img src={u.photos.small ? u.photos.small : avatar}
                                                               alt="avatar"/></div>
                            <div>{u.name}</div>
                            <div className={s.location}></div>
                            <button className={s.btn} onClick={() => deleteUser(u.id)}>x</button>
                        </div>
                        <div className={s.statusBar}>{u.status}</div>
                        <button onClick={followHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                })}
            </div>
            <div>
                <button onClick={showMoreHandler} disabled={usersPage.users.length <= usersPage.count}>Show more
                </button>
                <button onClick={getUsers}>Get new users</button>
            </div>

        </div>
    );
};

export default UsersFunctional;