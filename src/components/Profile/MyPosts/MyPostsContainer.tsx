import React from 'react';
import {
    addLikeActionCreator,
    addPostActionCreator,
    setPostActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from './MyPosts';
import {StateType} from '../../../redux/redux-store';
import {connect} from "react-redux";

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

const mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setPost: (post: string) => {
            dispatch(setPostActionCreator(post))
        },
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        addLike: (id: number) => {
            dispatch(addLikeActionCreator(id))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;