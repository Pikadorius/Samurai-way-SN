import React, {Component} from 'react';
import s from './Header.module.css';
import Header from './Header';
import {StateType} from '../../redux/redux-store';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';


class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((responce) => {
            if (responce.data.resultCode === 0) {
                this.props.setAuthUserData(responce.data.data)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

type MapDispatchToPropsType = typeof mapDispatchToProps
const mapDispatchToProps = {setAuthUserData}


type HeaderContainerType = MapDispatchToPropsType & MapStateToPropsType


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);