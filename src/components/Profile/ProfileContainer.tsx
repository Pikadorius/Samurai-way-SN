import React, {Component, ComponentType} from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    ServerProfileType, setProfile, setStatus, updateStatus
} from "../../redux/profile_reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from '../../HOCs/WithAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '26933';
        console.log(userId)
        this.props.setProfile(userId)
        this.props.setStatus(+userId)
        // https://social-network.samuraijs.com/api/1.0/profile/2
    }

    render = () => {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    };
}

// const AuthProfileContainer = withAuthRedirect(ProfileContainer)


type PathParamsType = {
    userId: string
}

type MapStateType = {
    profile: ServerProfileType | null
    status: string
}
const mapStateToProps = (state: StateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.profileStatus
    }
}

const actions = {
    setProfile,
    setStatus,
    updateStatus
}
type MapDispatchType = typeof actions

export type ProfileContainerType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>
export type ProfileType = MapStateType & MapDispatchType

// const ContainerComponentWithURL = withRouter(AuthProfileContainer)

export default compose(
    connect(mapStateToProps, actions),
    withRouter,
    withAuthRedirect
)(ProfileContainer) as ComponentType