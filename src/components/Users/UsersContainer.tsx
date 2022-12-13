import React, {Component} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    deleteUserAC,
    followAC,
    InitialStateType, setCurrentPageAC,
    setUsersAC,
    unfollowAC, setTotalUsersCountAC,
    UserType, setIsFetchingAC
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import UsersFunctional from "./UsersFunctional";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


type MapStateType = {
    usersPage: InitialStateType
}
const mapStateToProps = (state: StateType): MapStateType => {
    return {
        usersPage: state.usersPage
    }
}

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

type UsersPropsType = MapStateType & MapDispatchType

class UsersAPIComponent extends Component<UsersPropsType> {

    componentDidMount() {
        console.log('Users are inside DOM')
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count={${this.props.usersPage.pageSize}`).then((response) => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count={${this.props.usersPage.pageSize}`).then((response) => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        console.log('Users rendering')
        return (
            this.props.usersPage.isFetching ?
                <Preloader/> :
                <Users usersPage={this.props.usersPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       deleteUser={this.props.deleteUser}
                       setCurrentPage={this.props.setCurrentPage}
                       onPageChanged={this.onPageChanged}/>
        )
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;