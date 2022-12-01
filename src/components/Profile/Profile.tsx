import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile: React.FC = () => {
    return (
        <div>
            <ProfileInfoContainer/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;