import React from 'react';
import s from './ProfileInfo.module.css';
import {FactType} from '../../../redux/profile_reducer';
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import ProfileInfo  from "./ProfileInfo";


type MapStateType = {
    facts: FactType[]
}

const mapStateToProps= (state:StateType):MapStateType => {
    return {
        facts: state.profilePage.facts
    }
}

export type ProfileInfoType = MapStateType

export const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;