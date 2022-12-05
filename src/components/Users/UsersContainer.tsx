import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    deleteUserAC,
    followAC,
    InitialStateType,
    setUsersAC,
    showMoreAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import Users from './Users';


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
    showMore: () => void
    setUsers: (users: UserType[]) => void
    deleteUser: (id: number)=>void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        showMore: () => dispatch(showMoreAC()),
        setUsers: (users: UserType[])=>dispatch(setUsersAC(users)),
        deleteUser: (id:number)=>dispatch(deleteUserAC(id))
    }
}

export type UsersPropsType = MapStateType & MapDispatchType

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;