import React from 'react';
import s from "./Users.module.css";
import avatar from "../../assets/images/defaultUsersAvatar.jpg";
import {InitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

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
                } <input placeholder={`1-${pagesCount}`} onChange={(e) => props.onPageChanged(+e.currentTarget.value)}/>
            </div>

            <div className={s.usersField}>

                {users.map(u => {

                    const followHandler = () => {
                        u.followed ? props.unfollow(u.id) : props.follow(u.id)
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