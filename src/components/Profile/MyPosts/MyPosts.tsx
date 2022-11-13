import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: PostType[]
    addNewPost: () => void
    setNewPostText: (postValue: string) => void
    newPostText: string
}


const MyPosts: React.FC<MyPostsType> = ({posts, addNewPost, setNewPostText, newPostText}) => {

    const allPosts = posts.map(p => <Post name={p.title}
                                          description={p.description}
                                          likesCount={p.likesCount}
                                          id={p.id}
                                          key={p.id}/>)

    const setPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostText(e.currentTarget.value)
    }

    const addNewPostCallback = () => {
        addNewPost()
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