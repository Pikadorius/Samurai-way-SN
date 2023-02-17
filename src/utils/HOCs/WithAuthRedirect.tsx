import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {StateType} from '../../bll/redux-store';

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    type MapStateType = {
        isAuth: boolean
    }
    const mapStateToProps = (state: StateType): MapStateType => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    const RedirectedComponent = (props: MapStateType) => {
        let {isAuth, ...restProps}=props
        if (!isAuth) return <Redirect to={'/login'}/>
        else return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectedComponent);
}