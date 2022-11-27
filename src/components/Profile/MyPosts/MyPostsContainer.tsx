import React from 'react';
import {addLikeActionCreator, addPostActionCreator, setPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from './MyPosts';
import {StoreType} from '../../../redux/redux-store';

type MyPostsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsType> = (props) => {

    const MyPostsState = props.store.getState();

    const setPost = (post: string) => {
        props.store.dispatch(setPostActionCreator(post))
    }

    const addNewPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const addLike = (id: number) => {
        props.store.dispatch(addLikeActionCreator(id))
    }

    return <MyPosts newPostText={MyPostsState.profilePage.newPostText} posts={MyPostsState.profilePage.posts} setPost={setPost} addNewPost={addNewPost}
                    addLike={addLike}/>;
};

export default MyPostsContainer;