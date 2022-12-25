import React, {Component} from 'react';
import s from './Header.module.css';
import Header from './Header';
import {StateType} from '../../redux/redux-store';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData, setUserPhoto} from '../../redux/auth-reducer';
import {authMe} from '../../API/API';


class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        authMe().then((result) => {
            if (result.resultCode === 0) {
                this.props.setAuthUserData(result.data)
            }
        }).then(()=>axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((responce) => {
            debugger
            this.props.setUserPhoto(responce.data.photos.small)
        }))

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