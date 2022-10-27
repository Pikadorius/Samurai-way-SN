import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from './MyPosts/Post/Post';

type ProfileType = {
    postsData: PostType[]
}

const Profile:React.FC<ProfileType> = ({postsData}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
};

export default Profile;