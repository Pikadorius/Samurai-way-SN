import React, {Component, ComponentType} from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    ServerProfileType,
    setUserProfile
} from "../../redux/profile_reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) userId = '2';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data)
        })
        console.log(this.props.match.params.userId)
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
    setUserProfile
}
type MapDispatchType = typeof actions

export type ProfileContainerType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>
export type ProfileType = MapStateType

const ContainerComponentWithURL = withRouter(ProfileContainer)

export default connect(mapStateToProps, actions)(ContainerComponentWithURL);