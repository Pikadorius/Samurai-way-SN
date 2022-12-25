import React, {Component} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    deleteUser,
    follow,
    InitialStateType, setCurrentPage,
    setUsers,
    unfollow, setTotalUsersCount, setIsFetching
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import UsersFunctional from "./UsersFunctional";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from '../../API/API';

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
}*/
/*
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => dispatch(setUsersAC(users)),
        deleteUser: (id) => dispatch(deleteUserAC(id)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
        setIsFetching: (isFetching) => dispatch(setIsFetchingAC(isFetching))
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
    setIsFetching
}
type MapDispatchType = typeof actions

type UsersPropsType = MapStateType & MapDispatchType

class UsersAPIComponent extends Component<UsersPropsType> {

    componentDidMount() {
        console.log('Users are inside DOM')
        this.props.setIsFetching(true)
        getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then((data) => {
            debugger
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
        getUsers(p, this.props.usersPage.pageSize).then((response) => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        console.log('Users rendering')
        return (
            this.props.usersPage.isFetching ?
                <Preloader/> :
                <Users {...this.props} onPageChanged={this.onPageChanged}/>
        )
    }
}

const UsersContainer = connect(mapStateToProps, actions)(UsersAPIComponent);

export default UsersContainer;