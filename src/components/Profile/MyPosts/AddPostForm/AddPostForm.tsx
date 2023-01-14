import {maxLength, minLength, required} from '../../../../utils/validators/validators';
import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../../common/FormControls/FormControls';

export type PostFormType = {
    newPost: string
}

const maxLength50 = maxLength(50)
const minLength5 = minLength(5)

const PostForm: FC<InjectedFormProps<PostFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newPost'} validate={[required, maxLength50, minLength5]} placeholder={'Enter new post'}></Field>
        <button>Add post</button>
    </form>
}

const PostFormRedux = reduxForm<PostFormType>({
    form: 'profileAddPostForm'
})(PostForm)

export default PostFormRedux