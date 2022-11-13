import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addNewPost, setNewMessageText, setNewPostText, StateType} from './redux/state';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addNewPost} addMessage={addNewMessage} setPostValue={setNewPostText}
             setNewMessageText={setNewMessageText}/>,
        document.getElementById('root')
    );
}


