import React, {LegacyRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';

const MyPosts: React.FC<PostsType> = ({posts}) => {

    const allPosts = posts.map(p => <Post name={p.title}
                                          description={p.description}
                                          likesCount={p.likesCount}
                                          id={p.id}/>)

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef();


    const addPost = () => {
        debugger
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>Posts</h3>
                <div>
                    <textarea placeholder={'Write something... '} cols={30} rows={5} ref={newPostElement}></textarea>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    {allPosts}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;