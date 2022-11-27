import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from 'react-router-dom';


// function that render JSX
const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

// subscribe to store (if state changes - will be called)
store.subscribe(rerenderEntireTree)

// first render
rerenderEntireTree()

