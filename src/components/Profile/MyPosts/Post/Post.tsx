import React from 'react';
import s from './Post.module.css';
import {ActionsType} from "../../../../redux/state";

export type PostType = {
    name: string
    description: string
    likesCount: number
    id: number
    dispatch: (action: ActionsType) => void
}


const Post = (props: PostType) => {

    const addLike = () => {
        props.dispatch({type: "ADD-LIKE", postId: props.id});
    }


        return (
            <div className={s.item}>
                <img src="https://world.edu/wp-content/uploads/2020/05/Professional-Programmer.jpg" alt="my avatar"/>
                <div className={s.post}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <button onClick={addLike}>Likes: {props.likesCount}</button>
            </div>
        );
    };

    export default Post;