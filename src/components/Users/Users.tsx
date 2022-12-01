import React from 'react';
import {UsersPropsType} from "./UsersContainer";

const Users = (props:UsersPropsType) => {

    return (
        <div>
            {props.usersPage.users.map(u => {

                const followHandler = ()=>{
                    u.followed ? props.unfollow(u.id) : props.follow(u.id)
                }

                return <>
                    <div key={u.id}>{u.fullName}</div>
                    <div key={u.id}>{u.status}</div>
                    <button onClick={followHandler}>{u.followed? 'Unfollow':'Follow'}</button>
                    <hr/>
                </>
            })}
        </div>
    );
};

export default Users;