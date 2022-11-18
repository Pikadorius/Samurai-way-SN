import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";


// объявление функции рисующей JSX
const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} addNewPost={store.addNewPost.bind(store)} addNewMessage={store.addNewMessage.bind(store)} setNewPostText={store.setNewPostText.bind(store)}
             setNewMessageText={store.setNewMessageText.bind(store)} addLikeForPost={store.addLikeForPost.bind(store)}/>,
        document.getElementById('root')
    );
}

// первый вызов
rerenderEntireTree()

// передача в state (по изменению стейта вызывается заново --> перерисывавается компонента)
store.subscribe(rerenderEntireTree)

