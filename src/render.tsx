import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addLikeForPost, addNewMessage, addNewPost, setNewMessageText, setNewPostText, StateType} from './redux/state';

export const rerenderEntireTree = (stateForSN: StateType) => {
    ReactDOM.render(
        <App state={stateForSN} addNewPost={addNewPost} addNewMessage={addNewMessage} setNewPostText={setNewPostText}
             setNewMessageText={setNewMessageText} addLikeForPost={addLikeForPost}/>,
        document.getElementById('root')
    );
}


