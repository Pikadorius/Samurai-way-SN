import React, {Component} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    deleteUser,
    InitialStateType,
    GetUsersTCType,
    FollowTCType, OnPageChangedTCType, onPageChanged, getUsers, followSuccess, unfollowSuccess
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from 'react-router-dom';

type MapStateType = {
    usersPage: InitialStateType
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapStateType => {
    return {
        usersPage: state.usersPage,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchType = {
    deleteUser: (id: number) => void
    getUsers: GetUsersTCType
    followSuccess: FollowTCType
    unfollowSuccess: FollowTCType
    onPageChanged: OnPageChangedTCType
}

// we can pass an object of actions instead of function to connect (so we reduce our code)
const mapDispatchToProps: MapDispatchType = {
    deleteUser,
    getUsers,
    followSuccess,
    unfollowSuccess,
    onPageChanged
}

/*
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


export type UsersPropsType = MapStateType & MapDispatchType

class UsersAPIComponent extends Component<UsersPropsType> {

    componentDidMount() {
        console.log('Users are inside DOM')
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
        /*this.props.setIsFetching(true)
        API.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then((data) => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        }).catch()*/
        //https://social-network.samuraijs.com/api/1.0/users
    }

    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('Users have been updated')
    }

    componentWillUnmount() {
        console.log('Component Users die...')
    }

    /*
    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        API.getUsers(p, this.props.usersPage.pageSize).then((data) => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
    }
    */
    /*
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
        */

    render = () => {
        console.log('Users rendering')
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            this.props.usersPage.isFetching ?
                <Preloader/> :
                <Users {...this.props}/>
        )
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;