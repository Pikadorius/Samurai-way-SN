import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "./ProfileContainer";

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            {/*<MyPostsContainer/>*/}
            {/*<MyPosts
                newPostText={profilePage.newPostText}
                posts={profilePage.posts}
                setPost={setPost}
                addNewPost={addPost}
                addLike={addLike}/>*/}
        </div>
    );
};

export default Profile;