import React, {Component, ComponentType} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../bll/redux-store";
import {
    deleteUser,
    InitialStateType,
    GetUsersTCType,
    FollowTCType, OnPageChangedTCType, onPageChanged, getUsers, followSuccess, unfollowSuccess
} from "./users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from '../../utils/HOCs/WithAuthRedirect';
import {compose} from 'redux';
import {getUsersPageInfo} from "./user-selectors";

type MapStateType = {
    usersPage: InitialStateType
}
const mapStateToProps = (state: StateType): MapStateType => {
    console.log('MSTP users')
    return {
        usersPage: getUsersPageInfo(state)
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
        api.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then((data) => {
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
        api.getUsers(p, this.props.usersPage.pageSize).then((data) => {
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
                api.followUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                        this.props.follow(u.id)
                    }
                    this.props.setFollowingInProgress(false, u.id)
                })
            } else {
                this.props.setFollowingInProgress(true, u.id)
                api.unfollowUser(u.id).then((data) => {
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

        return (
            this.props.usersPage.isFetching ?
                <Preloader/> :
                <Users {...this.props}/>
        )
    }
}

// const AuthRedirectComponent = withAuthRedirect(UsersAPIComponent)
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersAPIComponent)