import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, showMore,setUsers, deleteUser}) => {

    const filteredUser = usersPage.users.filter((u, i) => i < usersPage.count)

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

                    const userClassName=u.followed? `${s.userItem} ${s.followed}` : s.userItem

                    return <div className={userClassName} key={u.id}>
                        <div className={s.about}>
                            <div>{u.fullName}</div><div className={s.location}>{u.location.country}/{u.location.city}</div>
                            <button onClick={()=>deleteUser(u.id)}>x</button>
                        </div>
                        <div className={s.statusBar}>{u.status}</div>
                        <button onClick={followHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                })}
            </div>
            <div>
                <button onClick={showMoreHandler} disabled={usersPage.users.length===usersPage.count}>Show more</button>
                <button onClick={()=>{}}>Get new users</button>
            </div>

        </div>
    );
};

export default Users;