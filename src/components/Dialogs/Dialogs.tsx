import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';
import {addMessageActionCreator, setMessageActionCreator} from '../../redux/dialogs_reducer';


const Dialogs: React.FC<DialogsType> = ({dialogsState, addMessage, setMessage, deleteMessage}) => {

    const dialogsElements = dialogsState.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                      avatar={d.avatar}/>)
    const messagesElements = dialogsState.messages.map(m => <Message key={m.id} id={m.id} message={m.message}
                                                                     onClick={() => deleteMessage(m.id)}/>)

    const onClickAddMessage = () => {
        addMessage()
    }

    const onChangeMessageHandler = (formData: MessageFormType) => {
        setMessage(formData.message)
    }

    const handleSubmit = (formData:MessageFormType) => {
        onChangeMessageHandler(formData)
        onClickAddMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    {/*<textarea value={dialogsState.newMessageText} onChange={onChangeMessageHandler}
                              placeholder={'Enter new message...'}/>
                    <button onClick={onClickAddMessage}>Add message</button>*/}
                    <MessageFormRedux onSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;






type MessageFormType = {
    message: string
}

const MessageForm:FC<InjectedFormProps<MessageFormType>> = (props)=> {
    return <form onSubmit={props.handleSubmit}>
        <Field component='textarea' name={'message'} placeholder={'Enter new message...'}></Field>
        <button>Add message</button>
    </form>
}

const MessageFormRedux = reduxForm<MessageFormType>({
    form: 'dialogAddeMessageForm'
})(MessageForm)


/*

const Messages = () => {

    const dispatch = useDispatch()

    const handleSubmit = (formData:MessageFormType) => {
        console.log(formData)
        dispatch(setMessageActionCreator(formData.message))
        debugger
        dispatch(addMessageActionCreator())
    }

    return <MessageFormRedux onSubmit={handleSubmit}/>
}*/
