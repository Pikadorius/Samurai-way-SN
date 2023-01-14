import React, {Component} from 'react';
import s from './Header.module.css';
import Header from './Header';
import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {authUser, AuthUserTCType, logoutTC, LogoutTCType} from '../../redux/auth-reducer';


class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        this.props.authUser()
    }

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
    authUser:AuthUserTCType
    logoutTC:LogoutTCType
}
const mapDispatchToProps:MapDispatchToPropsType = {
    authUser,
    logoutTC
}


export type HeaderContainerType = MapDispatchToPropsType & MapStateToPropsType


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);