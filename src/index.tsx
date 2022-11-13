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
    subscribe
} from './redux/state';

// объявление функции рисующей JSX
const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage} setNewPostText={setNewPostText}
             setNewMessageText={setNewMessageText} addLikeForPost={addLikeForPost}/>,
        document.getElementById('root')
    );
}

// первый вызов
rerenderEntireTree()

// передача в state (по изменению стейта вызывается заново --> перерисывавается компонента)
subscribe(rerenderEntireTree)

