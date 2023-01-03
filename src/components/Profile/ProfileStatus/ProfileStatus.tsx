import React, {ChangeEvent, Component, LegacyRef} from 'react';
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";

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
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
        let a = this.state
        let b = this.props
        console.log('updated')
    }


    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }


        return <div>
            Status:
            {this.state.editMode
                ?
                <input onChange={this.onStatusChange} autoFocus value={this.state.status}
                       onBlur={this.deactivateEditMode}/>
                : <span onDoubleClick={this.activateEditMode}>{this.props.status || `No status`}</span>

            }
        </div>;
    }
}

export default ProfileStatus;