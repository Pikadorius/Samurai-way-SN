import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profileState: ProfilePageType
    addPost: (post: string) => void
    setPostValue: (postValue: string)=>void
}

const Profile: React.FC<ProfilePropsType> = ({profileState,addPost, setPostValue}) => {
    return (
        <div>
            <ProfileInfo facts={profileState.facts}/>
            <MyPosts posts={profileState.posts} addPost={addPost} setPostValue={setPostValue} postValue={profileState.newPostText}/>
        </div>
    );
};

export default Profile;