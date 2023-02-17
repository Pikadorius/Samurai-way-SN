import React, {useEffect} from 'react';
import s from './Users.module.css'
import axios from 'axios';
import avatar from '../../assets/images/defaultUsersAvatar.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../bll/redux-store';
import {deleteUser, follow, InitialStateType, setUsers, unfollow} from './users-reducer';

const UsersFunctional: React.FC = () => {

    const state=useSelector<StateType, InitialStateType>(state=>state.usersPage)
    const dispatch=useDispatch()

    /*
    const getUsers = () => {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            debugger
            state.users.length ? alert('No more new users') : dispatch(setUsersAC(response.data.items))
        })

    }*/

    useEffect(()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            debugger
            state.users.length ? alert('No more new users') : dispatch(setUsers(response.data.items))
        })
    },[])

    const filteredUser = state.users.filter((u, i) => i < state.pageSize)

    return (
        <div>
            <div className={s.usersField}>

                {filteredUser.map(u => {

                    const followHandler = () => {
                        u.followed ? dispatch(unfollow(u.id)) : dispatch(follow(u.id))
                    }

                    const userClassName = u.followed ? `${s.userItem} ${s.followed}` : s.userItem

                    return <div className={userClassName} key={u.id}>
                        <div className={s.about}>
                            <div className={s.userAvatar}><img src={u.photos.small ? u.photos.small : avatar}
                                                               alt="avatar"/></div>
                            <div>{u.name}</div>
                            <div className={s.location}></div>
                            <button className={s.btn} onClick={() => dispatch(deleteUser(u.id))}>x</button>
                        </div>
                        <div className={s.statusBar}>{u.status}</div>
                        <button onClick={followHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default UsersFunctional;