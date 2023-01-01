import React, {Component} from 'react';
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import EditableSpan from '../../universal/EditableSpan/EditableSpan';
import {profileInfo} from '../../../API/API';

/*
const ProfileStatus = (props: ProfileType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const updateProfile = (status: string) => {
        return profileInfo.updateMyStatus(status)
    }

    return (
        <div>
            <EditableSpan title={'Enter status'} onChange={updateProfile}/>
        </div>
    );
};

export default ProfileStatus;
*/


class ProfileStatus extends Component<ProfileType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode:true})
    }

    deactivateEditMode = () => {
        this.setState({editMode:false})
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }


        return <div>
            {this.state.editMode
                ? <input value={this.props.profile.aboutMe} onBlur={this.deactivateEditMode}/>
                : <span onDoubleClick={this.activateEditMode}>{this.props.profile.aboutMe}</span>

            }
        </div>;
    }
}

export default ProfileStatus;