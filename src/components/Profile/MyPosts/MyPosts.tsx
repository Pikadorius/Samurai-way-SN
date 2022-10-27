import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';

type MyPostsType = {
    postsData: PostType[]
}

const MyPosts:React.FC<MyPostsType> = ({postsData}) => {

    const allPosts=postsData.map(p=><Post name={p.name} description={p.description} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className={s.content}>

            <div className={s.postsBlock}>
                <h3>Posts</h3>
                <div>
                    <textarea placeholder={'Write something... '} cols={50} rows={10}></textarea>
                    <button>Add post</button>
                    <button>Delete post</button>
                </div>
                <div>
                    {allPosts}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;