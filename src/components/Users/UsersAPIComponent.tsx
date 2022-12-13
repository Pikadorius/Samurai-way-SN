import React, {Component} from 'react';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';
import Users from "./Users";

class UsersAPIComponent extends Component<UsersPropsType> {

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

    onPageChanged = (p:number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count={${this.props.usersPage.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        console.log('Users rendering')
        return <Users usersPage={this.props.usersPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      deleteUser={this.props.deleteUser}
                      setCurrentPage={this.props.setCurrentPage}
                      onPageChanged={this.onPageChanged}/>
    }
}

export default UsersAPIComponent;