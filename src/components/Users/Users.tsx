import React, {Component} from 'react';
import s from './Users.module.css';
import avatar from '../../assets/images/defaultUsersAvatar.jpg';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

class Users extends Component<UsersPropsType> {

    componentDidMount() {
        alert('i am inside DOM')
        this.props.usersPage.users.length===0 && axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => this.props.setUsers(response.data.items))
    }

    showMore = () => this.props.showMore()

    render() {
        const filteredUser = this.props.usersPage.users.filter((u, i) => i < this.props.usersPage.count)

        return (
            <div>
                <div className={s.usersField}>

                    {filteredUser.map(u => {

                        const followHandler = () => {
                            u.followed ? this.props.unfollow(u.id) : this.props.follow(u.id)
                        }


                        const userClassName = u.followed ? `${s.userItem} ${s.followed}` : s.userItem

                        return <div className={userClassName} key={u.id}>
                            <div className={s.about}>
                                <div className={s.userAvatar}><img src={u.photos.small ? u.photos.small : avatar}
                                                                   alt="avatar"/></div>
                                <div>{u.name}</div>
                                <div className={s.location}></div>
                                <button className={s.btn} onClick={() => this.props.deleteUser(u.id)}>x</button>
                            </div>
                            <div className={s.statusBar}>{u.status}</div>
                            <button onClick={followHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                    })}
                </div>
                <div>
                    <button onClick={this.showMore} disabled={this.props.usersPage.users.length <= this.props.usersPage.count}>Show more
                    </button>
                </div>

            </div>
        );
    }
}

export default Users;