import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: (action: ActionsType)=>void
}

const Profile: React.FC<ProfilePropsType> = ({profileState, dispatch}) => {
    return (
        <div>
            <ProfileInfo facts={profileState.facts}/>
            <MyPostsContainer state={profileState} dispatch={dispatch}/>
        </div>
    );
};

export default Profile;