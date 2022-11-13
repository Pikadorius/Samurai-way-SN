import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profileState: ProfilePageType
    addNewPost: () => void
    setNewPostText: (postValue: string)=>void
    addLikeForPost: (id:number)=>void
}

const Profile: React.FC<ProfilePropsType> = ({profileState,addNewPost, setNewPostText, addLikeForPost}) => {
    return (
        <div>
            <ProfileInfo facts={profileState.facts}/>
            <MyPosts posts={profileState.posts} addNewPost={addNewPost} setNewPostText={setNewPostText} newPostText={profileState.newPostText} addLikeForPost={addLikeForPost}/>
        </div>
    );
};

export default Profile;