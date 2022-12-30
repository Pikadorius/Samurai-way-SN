import React, {Component} from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    ServerProfileType, setProfile} from "../../redux/profile_reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) userId = '2';
        this.props.setProfile(userId)
        // https://social-network.samuraijs.com/api/1.0/profile/2
    }

    render = () => {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    };
}

type PathParamsType = {
    userId: string
}

type MapStateType = {
    profile: ServerProfileType | null
}
const mapStateToProps = (state: StateType): MapStateType => {
    return {
        profile: state.profilePage.profile
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