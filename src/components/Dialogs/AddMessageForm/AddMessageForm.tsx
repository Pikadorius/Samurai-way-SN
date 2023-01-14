import {maxLength, minLength, required} from '../../../utils/validators/validators';
import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormControls/FormControls';

export type MessageFormType = {
    message: string
}

const maxLength100 = maxLength(100)
const minLength5 = minLength(5)

const MessageForm:FC<InjectedFormProps<MessageFormType>> = (props)=> {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'message'} placeholder={'Enter new message...'} validate={[required, maxLength100, minLength5]}></Field>
        <button>Add message</button>
        <button onClick={props.reset}>Reset</button>
    </form>
}

export const MessageFormRedux = reduxForm<MessageFormType>({
    form: 'dialogAddeMessageForm'
})(MessageForm)