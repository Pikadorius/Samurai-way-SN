import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.content}>

            <div className={s.posts}>
                <h3>Posts</h3>
                <div className={s.item}>
                    New post
                </div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    );
};

export default MyPosts;