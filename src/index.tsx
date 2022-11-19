import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import {BrowserRouter} from 'react-router-dom';


// объявление функции рисующей JSX
const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

// передача в state (по изменению стейта вызывается заново --> перерисывавается компонента)
store.subscribe(rerenderEntireTree)

// первый вызов
rerenderEntireTree()

