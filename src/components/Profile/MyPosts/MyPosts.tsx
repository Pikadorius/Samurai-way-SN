import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.content}>

            <div className={s.posts}>
                <h3>Posts</h3>
                <div>
                    <textarea cols={50} rows={10}></textarea>
                    <button>Add post</button>
                    <button>Delete post</button>
                </div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;