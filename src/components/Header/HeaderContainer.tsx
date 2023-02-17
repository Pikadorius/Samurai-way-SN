import React, {Component} from 'react';
import s from './Header.module.css';
import Header from './Header';
import {StateType} from '../../bll/redux-store';
import {connect} from 'react-redux';
import {authUserTC, AuthUserTCType, logoutTC, LogoutTCType} from '../Login/auth-reducer';


class HeaderContainer extends Component<HeaderContainerType> {

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    id: number | null
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    }
}

type MapDispatchToPropsType = {
    logoutTC: LogoutTCType
}
const mapDispatchToProps: MapDispatchToPropsType = {
    logoutTC
}


export type HeaderContainerType = MapDispatchToPropsType & MapStateToPropsType


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);