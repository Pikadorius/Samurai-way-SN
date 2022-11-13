import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: PostType[]
    addPost: (post: string) => void
    setPostValue: (postValue: string) => void
    postValue: string
}


const MyPosts: React.FC<MyPostsType> = ({posts, addPost, setPostValue, postValue}) => {

    const allPosts = posts.map(p => <Post name={p.title}
                                          description={p.description}
                                          likesCount={p.likesCount}
                                          id={p.id}
                                          key={p.id}/>)

    const changePostValue = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setPostValue(e.currentTarget.value)
    }

    const addNewPost = () => {
        addPost(postValue)
        postValue=""
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>Posts</h3>
                <div>
                    <textarea cols={30} rows={5} value={postValue} onChange={changePostValue}></textarea>
                    <button onClick={addNewPost}>Add post</button>
                </div>
                <div>
                    {allPosts}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;