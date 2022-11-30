import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {StoreType} from '../../redux/redux-store';

type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo facts={props.store.getState().profilePage.facts}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;