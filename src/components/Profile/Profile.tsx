import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageType} from '../../redux/store';

type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: (action: ActionsType)=>void
}

const Profile: React.FC<ProfilePropsType> = ({profileState, dispatch}) => {
    return (
        <div>
            <ProfileInfo facts={profileState.facts}/>
            <MyPosts newPostText={profileState.newPostText} posts={profileState.posts} dispatch={dispatch}/>
        </div>
    );
};

export default Profile;