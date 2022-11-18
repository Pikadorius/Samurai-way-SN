import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsType, PostType} from '../../../redux/state';

type MyPostsType = {
    newPostText: string
    posts: PostType[]
    dispatch: (action: ActionsType)=>void
}


const MyPosts: React.FC<MyPostsType> = ({newPostText,posts,dispatch}) => {

    const allPosts = posts.map(p => <Post name={p.title}
                                          description={p.description}
                                          likesCount={p.likesCount}
                                          id={p.id}
                                          key={p.id}
                                          dispatch={dispatch}/>)

    const setPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type:"SET-POST-TEXT",newPostText:e.currentTarget.value})
    }

    const addNewPostCallback = () => {
        dispatch({type:"ADD-NEW-POST"})
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>Posts</h3>
                <div>
                    <textarea cols={30} rows={5} value={newPostText} onChange={setPost}></textarea>
                    <button onClick={addNewPostCallback}>Add post</button>
                </div>
                <div>
                    {allPosts}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;