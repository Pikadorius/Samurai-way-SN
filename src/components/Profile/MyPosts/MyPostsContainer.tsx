import React from 'react';
import {
    addLike,
    addPost, PostType,
} from "../../../redux/profile_reducer";
import MyPosts from './MyPosts';
import {StateType} from '../../../redux/redux-store';
import {connect} from "react-redux";
import {Dispatch} from "redux";

/*
type MyPostsType = {
    store: StoreType
}

const superMyPostsContainer: React.FC<MyPostsType> = (props) => {

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
*/

type MapStatePropsType = {
    posts: PostType[]
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

type MapDispatchPropsType = {
    addNewPost: (post: string) => void
    addLike: (id: number) => void
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewPost: (newPost) => {
            dispatch(addPost(newPost))
        },
        addLike: (id: number) => {
            dispatch(addLike(id))
        }
    }
}

export type MyPostsType = MapStatePropsType & MapDispatchPropsType

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;