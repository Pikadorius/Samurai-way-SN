import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";


// объявление функции рисующей JSX
const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

// первый вызов
rerenderEntireTree()

// передача в state (по изменению стейта вызывается заново --> перерисывавается компонента)
store.subscribe(rerenderEntireTree)

