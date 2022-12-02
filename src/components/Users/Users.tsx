import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import {v1} from 'uuid';

const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, showMore,setUsers, deleteUser}) => {

    const filteredUser = usersPage.users.filter((u, i) => i < usersPage.count)


    const getUsers = () => {
        usersPage.users.length ? alert('No more new users') : setUsers([
            {
                id: v1(),
                fullName: 'Egor K',
                status: 'Studying!',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: false,
                photoURL: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'

            },
            {
                id: v1(),
                fullName: 'Anton K',
                status: 'Working in Alpha Bank',
                location: {city: 'St.Petersburg', country: 'Russia'},
                followed: true,
                photoURL: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'
            },
            {
                id: v1(),
                fullName: 'Daniil K',
                status: 'Playing toys %)',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: true,
                photoURL: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg'
            },
            {
                id: v1(),
                fullName: 'Katerina K',
                status: 'Cooking',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: false,
                photoURL: 'https://thumbs.dreamstime.com/b/%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8-179951578.jpg'
            },
            {
                id: v1(),
                fullName: 'Nikita P',
                status: 'Reading book',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: false,
                photoURL: 'https://storage.streamdps.com/iblock/ba4/ba43a8bf5b491168b4f74e9922c88c25.jpg'
            },
            {
                id: v1(),
                fullName: 'Vadim T',
                status: 'Selling cars',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: true,
                photoURL: 'https://vjoy.cc/wp-content/uploads/2020/10/kartinki-na-avatarku-dlya-parnej-i-muzhchin-18-scaled.jpg'
            },
            {
                id: v1(),
                fullName: 'Kim G',
                status: 'Learning about Redux',
                location: {city: 'Gomel', country: 'Belarus'},
                followed: false,
                photoURL: 'http://sun9-70.userapi.com/impf/c849220/v849220346/36878/JhH-zDMl7O0.jpg?size=807x426&quality=96&sign=676c7f8952269a6848f97aec81e874c7&type=album'
            },
            {
                id: v1(),
                fullName: 'Denis B',
                status: 'Working hard...',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: false,
                photoURL: 'http://sun9-70.userapi.com/impf/c849220/v849220346/36878/JhH-zDMl7O0.jpg?size=807x426&quality=96&sign=676c7f8952269a6848f97aec81e874c7&type=album'
            },
        ] )
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

                    const userClassName=u.followed? `${s.userItem} ${s.followed}` : s.userItem

                    return <div className={userClassName} key={u.id}>
                        <div className={s.about}>
                            <div className={s.userAvatar}><img src={u.photoURL} alt="avatar"/></div>
                            <div>{u.fullName}</div><div className={s.location}>{u.location.country}/{u.location.city}</div>
                            <button className={s.btn} onClick={()=>deleteUser(u.id)}>x</button>
                        </div>
                        <div className={s.statusBar}>{u.status}</div>
                        <button onClick={followHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                })}
            </div>
            <div>
                <button onClick={showMoreHandler} disabled={usersPage.users.length===usersPage.count}>Show more</button>
                <button onClick={getUsers}>Get new users</button>
            </div>

        </div>
    );
};

export default Users;