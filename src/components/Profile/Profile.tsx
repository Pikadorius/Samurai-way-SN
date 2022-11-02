import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {FactType, PostType, setPostValue} from '../../redux/state';

type ProfilePropsType = {
    posts: PostType[]
    facts: FactType[]
    addPost: (post: string) => void
    setPostValue: (postValue: string)=>void
    postValue: string
}

const Profile: React.FC<ProfilePropsType> = ({posts, facts, addPost, setPostValue, postValue}) => {
    return (
        <div>
            <ProfileInfo facts={facts}/>
            <MyPosts posts={posts} addPost={addPost} setPostValue={setPostValue} postValue={postValue}/>
        </div>
    );
};

export default Profile;