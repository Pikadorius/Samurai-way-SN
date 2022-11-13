import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profileState: ProfilePageType
    addNewPost: () => void
    setNewPostText: (postValue: string)=>void
}

const Profile: React.FC<ProfilePropsType> = ({profileState,addNewPost, setNewPostText}) => {
    return (
        <div>
            <ProfileInfo facts={profileState.facts}/>
            <MyPosts posts={profileState.posts} addNewPost={addNewPost} setNewPostText={setNewPostText} newPostText={profileState.newPostText}/>
        </div>
    );
};

export default Profile;