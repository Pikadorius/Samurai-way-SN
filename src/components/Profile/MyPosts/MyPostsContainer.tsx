import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsType, PostType, ProfilePageType} from '../../../redux/store';
import {addLikeActionCreator, addPostActionCreator, setPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from './MyPosts';

type MyPostsType = {
    state: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const MyPostsContainer: React.FC<MyPostsType> = ({state, dispatch}) => {

    const setPost = (post: string) => {
        dispatch(setPostActionCreator(post))
    }

    const addNewPost = () => {
        dispatch(addPostActionCreator())
    }

    const addLike = (id: number) => {
        dispatch(addLikeActionCreator(id))
    }

    return <MyPosts newPostText={state.newPostText} posts={state.posts} setPost={setPost} addNewPost={addNewPost}
                    addLike={addLike}/>;
};

export default MyPostsContainer;