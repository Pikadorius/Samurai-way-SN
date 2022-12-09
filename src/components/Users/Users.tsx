import React, {Component} from 'react';
import s from './Users.module.css';
import avatar from '../../assets/images/defaultUsersAvatar.jpg';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

class Users extends Component<UsersPropsType> {

    componentDidMount() {
        console.log('Users are inside DOM')
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            this.props.setUsers(response.data.items)
        })
        //https://social-network.samuraijs.com/api/1.0/users
    }

    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('Users have been updated')
    }

    componentWillUnmount() {
        console.log('Component Users die...')
    }

    showMore = () => this.props.showMore()

    render = () => {
        console.log('Users rendering')
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
                                <button className={s.btn} onClick={() => this.props.deleteUser(u.id)}>x</button>
                            </div>
                            <div className={s.statusBar}>{u.status}</div>
                            <button onClick={followHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                    })}
                </div>
                <div style={{margin:'10px'}}>
                    <button onClick={this.showMore} disabled={this.props.usersPage.users.length <= this.props.usersPage.count}>Show more
                    </button>
                </div>

            </div>
        );
    }
}

export default Users;