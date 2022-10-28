import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


const Profile:React.FC<ProfilePageType> = ({posts,facts}) => {
    return (
        <div>
            <ProfileInfo facts={facts}/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;