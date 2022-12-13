import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    deleteUserAC,
    followAC,
    InitialStateType, setCurrentPageAC,
    setUsersAC,
    unfollowAC, setTotalUsersCountAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import UsersAPIComponent from './UsersAPIComponent';
import UsersFunctional from "./UsersFunctional";


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
    deleteUser: (id: number)=>void
    setCurrentPage: (pageNumber:number)=>void
    setTotalUsersCount: (totalCount: number)=>void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users)=>dispatch(setUsersAC(users)),
        deleteUser: (id)=>dispatch(deleteUserAC(id)),
        setCurrentPage: (pageNumber)=>dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount:(totalCount)=>dispatch(setTotalUsersCountAC(totalCount))
    }
}

export type UsersPropsType = MapStateType & MapDispatchType

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;