import React, {useState,KeyboardEvent} from 'react';
import s from "./Users.module.css";
import avatar from "../../assets/images/defaultUsersAvatar.jpg";
import {InitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from 'axios';

type UsersType = {
    usersPage: InitialStateType
    onPageChanged: (n: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    deleteUser: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
}

const Users = (props: UsersType) => {

    // destructuring usersPage
    const {users, totalUsersCount, currentPage, pageSize} = props.usersPage
    // calculate pages count
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize)
    // create pages array
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [page, setPage]=useState<number>(currentPage)

    const onEnter = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter" && page<=pagesCount) {
            props.onPageChanged(page)
        }
    }


    let curPF = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    let curPL = currentPage + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            {/*pagination*/}
            <div className={s.pagination}>
                {
                    slicedPages.map(p => <span onClick={() => props.onPageChanged(p)} key={p}
                                               className={currentPage === p ? s.selectedPage : ""}> {p} </span>)
                } <input
                placeholder={`1-${pagesCount}`}
                onChange={(e) =>setPage(+e.currentTarget.value)} onKeyDown={onEnter}/>
            </div>

            <div className={s.usersField}>

                {users.map(u => {
                    const followHandler = () => {
                        // u.followed ? props.unfollow(u.id) : props.follow(u.id)
                        if (!u.followed) {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true, headers:}).then((responce)=>{
                                debugger
                                if (responce.data.resultCode===0) {
                                    props.follow(u.id)
                                }
                            })
                        } else {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true}).then((responce)=>{
                                debugger
                                if (responce.data.resultCode===0) {
                                    props.unfollow(u.id)
                                }
                            })
                        }
                    }


                    const userClassName = u.followed ? `${s.userItem} ${s.followed}` : s.userItem

                    return <div className={userClassName} key={u.id}>
                        <div className={s.about}>
                            <div className={s.userAvatar}>
                                <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos.small ? u.photos.small : avatar}
                                    alt="avatar"/>
                                </NavLink>
                            </div>
                            <div>{u.name}</div>
                            <button className={s.btn} onClick={() => props.deleteUser(u.id)}>x</button>
                        </div>
                        <div className={s.statusBar}>{u.status}</div>
                        <button onClick={followHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Users;