import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios';
import avatar from '../../assets/images/defaultUsersAvatar.jpg'
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {deleteUserAC, followAC, InitialStateType, setUsersAC, showMoreAC, unfollowAC} from '../../redux/users-reducer';

const UsersFunctional: React.FC = () => {

    const state=useSelector<StateType, InitialStateType>(state=>state.usersPage)
    const dispatch=useDispatch()

    const filteredUser = state.users.filter((u, i) => i < state.count)

    const getUsers = () => {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            debugger
            state.users.length ? alert('No more new users') : dispatch(setUsersAC(response.data.items))
        })

    }


    return (
        <div>
            <div className={s.usersField}>

                {filteredUser.map(u => {

                    const followHandler = () => {
                        u.followed ? dispatch(unfollowAC(u.id)) : dispatch(followAC(u.id))
                    }

                    const userClassName = u.followed ? `${s.userItem} ${s.followed}` : s.userItem

                    return <div className={userClassName} key={u.id}>
                        <div className={s.about}>
                            <div className={s.userAvatar}><img src={u.photos.small ? u.photos.small : avatar}
                                                               alt="avatar"/></div>
                            <div>{u.name}</div>
                            <div className={s.location}></div>
                            <button className={s.btn} onClick={() => dispatch(deleteUserAC(u.id))}>x</button>
                        </div>
                        <div className={s.statusBar}>{u.status}</div>
                        <button onClick={followHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                })}
            </div>
            <div>
                <button onClick={()=>dispatch(showMoreAC())} disabled={state.users.length <= state.count}>Show more
                </button>
                <button onClick={getUsers}>Get new users</button>
            </div>

        </div>
    );
};

export default UsersFunctional;