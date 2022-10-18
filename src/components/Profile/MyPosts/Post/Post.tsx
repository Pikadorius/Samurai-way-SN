import React, {useState} from 'react';
import s from './Post.module.css';

type PostType = {
    name: string
    description: string
    likesCount: number
}


const Post = (props: PostType) => {

    const [likes, setLikes]=useState<number>(props.likesCount);

    return (
        <div className={s.item}>
            <img src="https://world.edu/wp-content/uploads/2020/05/Professional-Programmer.jpg" alt="my avatar"/>
            <div className={s.post}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <button onClick={()=>setLikes(likes+1)}>Likes: {likes}</button>
        </div>
    );
};

export default Post;