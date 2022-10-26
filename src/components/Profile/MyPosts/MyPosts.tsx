import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';


const postsData:PostType[]= [
    {id:1,name:"My  first post", description: "I try to set props to my firts post...", likesCount: 0},
    {id:2,name:"It works, I'm very excited!", description: "Hmmm... I really enjoy the result!", likesCount: 0}
]



const MyPosts = () => {
    return (
        <div className={s.content}>

            <div className={s.postsBlock}>
                <h3>Posts</h3>
                <div>
                    <textarea placeholder={'Write something... '} cols={50} rows={10}></textarea>
                    <button>Add post</button>
                    <button>Delete post</button>
                </div>
                <Post name={postsData[0].name} description={postsData[0].description} likesCount={postsData[0].likesCount} id={postsData[0].id}/>
                <Post name={postsData[1].name} description={postsData[1].description} likesCount={postsData[1].likesCount} id={postsData[1].id}/>
            </div>
        </div>
    );
};

export default MyPosts;