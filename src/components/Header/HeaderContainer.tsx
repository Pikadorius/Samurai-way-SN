import React, {Component} from 'react';
import s from './Header.module.css';
import Header from './Header';
import {StateType} from '../../redux/redux-store';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData, setUserPhoto} from '../../redux/auth-reducer';
import {API} from '../../API/API';


class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        API.authMe().then((result) => {
            if (result.resultCode === 0) {
                this.props.setAuthUserData(result.data)
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
    photo: string | undefined
    id: number | null
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo,
        id: state.auth.id
    }
}

type MapDispatchToPropsType = typeof mapDispatchToProps
const mapDispatchToProps = {
    setAuthUserData,
    setUserPhoto
}


type HeaderContainerType = MapDispatchToPropsType & MapStateToPropsType


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);