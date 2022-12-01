import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {StateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/users-reducer";


type MapStateType = {
    usersPage: InitialStateType
}

const mapStateToProps = (state: StateType):MapStateType=> {
    return {
        usersPage: state.usersPage
    }
}

export type UsersPropsType = MapStateType

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;