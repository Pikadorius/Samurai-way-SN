import React, {useState, KeyboardEvent, FC} from 'react';
import s from "./Users.module.css";
import avatar from "../../assets/images/defaultUsersAvatar.jpg";
import {NavLink, Redirect} from "react-router-dom";
import {UsersPropsType} from './UsersContainer';
import {Provider} from 'react-redux';

const Users:FC<UsersPropsType> = (props) => {

    // destructuring usersPage
    const {users, totalUsersCount, currentPage, pageSize} = props.usersPage
    // calculate pages count
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize)
    // create pages array
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [page, setPage] = useState<number>(currentPage)

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && page <= pagesCount) {
            props.onPageChanged(page, pageSize)
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
                    slicedPages.map(p => <span onClick={() => props.onPageChanged(p, pageSize)} key={p}
                                               className={currentPage === p ? s.selectedPage : ""}> {p} </span>)
                } <input
                placeholder={`1-${pagesCount}`}
                onChange={(e) => setPage(+e.currentTarget.value)} onKeyDown={onEnter}/>
            </div>

            <div className={s.usersField}>

                {users.map(u => {

                    const followUser = () => {
                        props.followSuccess(u.id)
                    }

                    const unfollowUser = () => {
                        props.unfollowSuccess(u.id)
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
                            <button className={s.btn} onClick={() => props.deleteUser(u.id)}
                                    disabled={props.usersPage.followingInProgress.includes(u.id)}>x
                            </button>
                        </div>
                        <div className={s.statusBar}>{u.status}</div>
                        <button onClick={u.followed ? unfollowUser : followUser}
                                disabled={props.usersPage.followingInProgress.some(id => id === u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Users;