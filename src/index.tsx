import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";


// объявление функции рисующей JSX
const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} addNewPost={store.addNewPost} addNewMessage={store.addNewMessage} setNewPostText={store.setNewPostText}
             setNewMessageText={store.setNewMessageText} addLikeForPost={store.addLikeForPost}/>,
        document.getElementById('root')
    );
}

// первый вызов
rerenderEntireTree()

// передача в state (по изменению стейта вызывается заново --> перерисывавается компонента)
store.subscribe(rerenderEntireTree)

