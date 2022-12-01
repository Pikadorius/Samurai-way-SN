import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
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


type MapStateType = {
    usersPage: InitialStateType
}

const mapStateToProps = (state: StateType): MapStateType => {
    return {
        usersPage: state.usersPage
    }
}

type MapDispatchType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    showMore: () => void
    setUsers: (users: UserType[]) => void
    deleteUser: (id: string)=>void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unfollow: (id: string) => {
            dispatch(unfollowAC(id))
        },
        showMore: () => dispatch(showMoreAC()),
        setUsers: (users: UserType[])=>dispatch(setUsersAC(users)),
        deleteUser: (id:string)=>dispatch(deleteUserAC(id))
    }
}

export type UsersPropsType = MapStateType & MapDispatchType

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;