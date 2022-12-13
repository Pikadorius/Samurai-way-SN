import React, {Component} from 'react';
import s from './Users.module.css';
import avatar from '../../assets/images/defaultUsersAvatar.jpg';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

class Users extends Component<UsersPropsType> {

    componentDidMount() {
        console.log('Users are inside DOM')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count={${this.props.usersPage.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(this.props.usersPage.totalUsersCount)
        })
        //https://social-network.samuraijs.com/api/1.0/users
    }

    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('Users have been updated')
    }

    componentWillUnmount() {
        console.log('Component Users die...')
    }

    updateUsers = (p:number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count={${this.props.usersPage.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        console.log('Users rendering')

        // destructuring usersPage
        const {users,totalUsersCount,currentPage,pageSize}=this.props.usersPage
        // calculate pages count
        let pagesCount: number = Math.ceil(totalUsersCount / pageSize)
        // create pages array
        let pages: number[] = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let curPF = ((currentPage - 5) < 0) ?  0  : currentPage - 5 ;
        let curPL = currentPage + 5;
        let slicedPages = pages.slice(curPF, curPL);
        return (
            <div>
                {/*pagination*/}
                <div className={s.pagination}>
                    {
                        slicedPages.map(p => <span onClick={()=>this.updateUsers(p)} key={p} className={currentPage===p ? s.selectedPage : ""}> {p} </span>)
                    } <input placeholder={`1-${pagesCount}`} onChange={(e)=>this.updateUsers(+e.currentTarget.value)}/>
                </div>

                <div className={s.usersField}>

                    {users.map(u => {

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
            </div>
        );
    }
}

export default Users;