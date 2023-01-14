import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

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

const MyPosts: React.FC<MyPostsType> = ({posts, addNewPost, addLike}) => {

    const allPosts = posts.map(p => <Post name={p.title}
                                          description={p.description}
                                          likesCount={p.likesCount}
                                          id={p.id}
                                          key={p.id}
                                          addLike={addLike}/>)

    const onAddNewPost = (formData: PostFormType) => {
        addNewPost(formData.newPost)
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>Posts</h3>
                <PostFormRedux onSubmit={onAddNewPost}/>
                <div>
                    {allPosts}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;


type PostFormType = {
    newPost: string
}

const PostForm: FC<InjectedFormProps<PostFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={'textarea'} name={'newPost'} cols={30} rows={5}></Field>
        <button>Add post</button>
    </form>
}

const PostFormRedux = reduxForm<PostFormType>({
    form: 'profileAddPostForm'
})(PostForm)