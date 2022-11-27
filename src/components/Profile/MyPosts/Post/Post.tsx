import React from 'react';
import s from './Post.module.css';

export type PostType = {
    name: string
    description: string
    likesCount: number
    id: number
    addLike: (id:number) => void
}

const Post = (props: PostType) => {

    const onAddLike= () => {
        props.addLike(props.id);
    }

        return (
            <div className={s.item}>
                <img src="https://www.shkolazhizni.ru/img/content/i156/156707_or.jpg" alt="my avatar"/>
                <div className={s.post}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <button onClick={onAddLike}>Likes: {props.likesCount}</button>
            </div>
        );
    };

    export default Post;