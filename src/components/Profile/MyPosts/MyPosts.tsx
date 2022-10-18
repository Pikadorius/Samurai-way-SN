import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.content}>

            <div className={s.posts}>
                <h3>Posts</h3>
                <div>
                    <textarea placeholder={'Write something... '} cols={50} rows={10}></textarea>
                    <button>Add post</button>
                    <button>Delete post</button>
                </div>
                <Post name={"My  first post"} description={"I try to set props to my firts post..."} likesCount={0}/>
                <Post name={"It works, I'm very excited!"} description={"Hmmm... I really enjoy the result!"} likesCount={0}/>
            </div>
        </div>
    );
};

export default MyPosts;