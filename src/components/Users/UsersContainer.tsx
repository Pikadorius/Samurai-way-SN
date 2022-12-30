import React, {Component} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    deleteUser,
    follow,
    InitialStateType, setCurrentPage,
    setUsers,
    unfollow, setTotalUsersCount, setIsFetching, setFollowingInProgress, UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import UsersFunctional from "./UsersFunctional";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {API} from '../../API/API';

type MapStateType = {
    usersPage: InitialStateType
}
const mapStateToProps = (state: StateType): MapStateType => {
    return {
        usersPage: state.usersPage
    }
}
/*
type MapDispatchType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
    deleteUser: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow: (id) => {
            dispatch(follow(id))
        },
        unfollow: (id) => {
            dispatch(unfollow(id))
        },
        setUsers: (users) => dispatch(setUsers(users)),
        deleteUser: (id) => dispatch(deleteUser(id)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
        setIsFetching: (isFetching) => dispatch(setIsFetching(isFetching)),
    }
}
*/

// we can pass an object of actions instead of function to connect (so we reduce our code)
const actions = {
    follow,
    unfollow,
    setUsers,
    deleteUser,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setFollowingInProgress
}

type MapDispatchType = typeof actions

type UsersPropsType = MapStateType & MapDispatchType

class UsersAPIComponent extends Component<UsersPropsType> {

    componentDidMount() {
        console.log('Users are inside DOM')
        this.props.setIsFetching(true)
        API.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then((data) => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        }).catch()
        //https://social-network.samuraijs.com/api/1.0/users
    }

    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('Users have been updated')
    }

    componentWillUnmount() {
        console.log('Component Users die...')
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        API.getUsers(p, this.props.usersPage.pageSize).then((response) => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    followUnfollow = (u: UserType) => {
        this.props.setFollowingInProgress(true, u.id)
        // u.followed ? props.unfollow(u.id) : props.follow(u.id)
        if (!u.followed) {
            API.followUser(u.id).then((data) => {
                if (data.resultCode === 0) {
                    this.props.follow(u.id)
                }
                this.props.setFollowingInProgress(false, u.id)
            })
        } else {
            this.props.setFollowingInProgress(true, u.id)
            API.unfollowUser(u.id).then((data) => {
                if (data.resultCode === 0) {
                    this.props.unfollow(u.id)
                }
                this.props.setFollowingInProgress(false, u.id)
            })
        }
    }

    render = () => {
        console.log('Users rendering')
        return (
            this.props.usersPage.isFetching ?
                <Preloader/> :
                <Users {...this.props} onPageChanged={this.onPageChanged} followHandler={this.followUnfollow}/>
        )
    }
}

const UsersContainer = connect(mapStateToProps, actions)(UsersAPIComponent);

export default UsersContainer;