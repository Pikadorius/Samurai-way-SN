import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {FactType, PostType} from '../../redux/state';

type ProfilePropsType = {
    posts: PostType[]
    facts: FactType[]
    addPost: (post: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({posts, facts, addPost}) => {
    return (
        <div>
            <ProfileInfo facts={facts}/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
};

export default Profile;