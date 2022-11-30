import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";


// added Provider, so we don't need to rerender all if something changes

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App store={store}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'))


/*

// added Provider, so we don't need to rerender all if something changes

// function that render JSX
const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}



// subscribe to store (if state changes - will be called)
store.subscribe(rerenderEntireTree)

// first render
rerenderEntireTree()

*/
