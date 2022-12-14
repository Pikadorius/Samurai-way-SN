import React, {Component} from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    ServerProfileType,
    setUserProfile
} from "../../redux/profile_reducer";
import {StateType} from "../../redux/redux-store";


class ProfileContainer extends Component<ProfileContainerType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfile(response.data)
        })
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

type ProfileContainerType = MapStateType & MapDispatchType
export type ProfileType = MapStateType

export default connect(mapStateToProps,actions)(ProfileContainer);