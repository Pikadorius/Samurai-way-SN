import React from 'react';
import s from './Post.module.css';
import {ActionsType, addLIkeActionCreator} from "../../../../redux/store";

export type PostType = {
    name: string
    description: string
    likesCount: number
    id: number
    dispatch: (action: ActionsType) => void
}


const Post = (props: PostType) => {

    const addLike = () => {
        props.dispatch(addLIkeActionCreator(props.id));
    }


        return (
            <div className={s.item}>
                <img src="https://www.shkolazhizni.ru/img/content/i156/156707_or.jpg" alt="my avatar"/>
                <div className={s.post}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <button onClick={addLike}>Likes: {props.likesCount}</button>
            </div>
        );
    };

    export default Post;