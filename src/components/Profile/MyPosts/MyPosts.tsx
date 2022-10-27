import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';


const postsData:PostType[]= [
    {id:1,name:"My  first post", description: "I try to set props to my firts post...", likesCount: 0},
    {id:2,name:"It works, I'm very excited!", description: "Hmmm... I really enjoy the result!", likesCount: 0},
    {id:3,name:"Dimych is the best!", description: "Dimych has a talant to teach", likesCount: 10}
]



const MyPosts = () => {

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