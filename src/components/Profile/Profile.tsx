import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {StoreType} from '../../redux/redux-store';

type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo facts={props.store.getState().profilePage.facts}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;