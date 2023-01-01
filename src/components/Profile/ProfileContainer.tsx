import React, {Component} from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    ServerProfileType, setProfile} from "../../redux/profile_reducer";
import {StateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) userId = '26933';
        this.props.setProfile(userId)
        // https://social-network.samuraijs.com/api/1.0/profile/2
    }

    render = () => {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    };
}

type PathParamsType = {
    userId: string
}

type MapStateType = {
    profile: ServerProfileType | null
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const actions = {
    setProfile
}
type MapDispatchType = typeof actions

export type ProfileContainerType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>
export type ProfileType = MapStateType

const ContainerComponentWithURL = withRouter(ProfileContainer)

export default connect(mapStateToProps, actions)(ContainerComponentWithURL);