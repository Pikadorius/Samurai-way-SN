import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {
    addLikeForPost,
    addNewMessage,
    addNewPost,
    setNewMessageText,
    setNewPostText,
    StateType,
    subscribe
} from './redux/state';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage} setNewPostText={setNewPostText}
             setNewMessageText={setNewMessageText} addLikeForPost={addLikeForPost}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree()
subscribe(rerenderEntireTree)

