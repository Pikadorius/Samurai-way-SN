import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType} from "./MyPostsContainer";

/*type PostType = {
    id: number
    title: string
    description: string
    likesCount: number
}

type MyPostsType = {
    newPostText: string
    posts: PostType[]
    setPost: (post: string)=>void
    addNewPost: ()=>void
    addLike: (id:number)=>void
}*/

const MyPosts: React.FC<MyPostsType> = ({newPostText,posts,setPost, addNewPost,addLike}) => {

    const allPosts = posts.map(p => <Post name={p.title}
                                          description={p.description}
                                          likesCount={p.likesCount}
                                          id={p.id}
                                          key={p.id}
                                          addLike={addLike}/>)

    const onSetPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
       setPost(e.currentTarget.value)
    }

    const onAddNewPost = () => {
        addNewPost()
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>Posts</h3>
                <div>
                    <textarea cols={30} rows={5} value={newPostText} onChange={onSetPost}></textarea>
                    <button onClick={onAddNewPost}>Add post</button>
                </div>
                <div>
                    {allPosts}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;