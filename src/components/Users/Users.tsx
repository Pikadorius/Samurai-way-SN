import React from 'react';
import {UsersPropsType} from "./UsersContainer";

const Users = (props:UsersPropsType) => {
    return (
        <div>
            {props.usersPage.users.map(u => {
                return <>
                    <div key={u.id}>{u.fullName}</div>
                    <div key={u.id}>{u.status}</div>
                    <hr/>
                </>
            })}
        </div>
    );
};

export default Users;