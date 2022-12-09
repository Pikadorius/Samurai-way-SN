import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {reducer} from "./redux/redux-store";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {loadState, saveState} from './localStorage/localStorage';
import {createStore} from 'redux';
import throttle from 'lodash/throttle';

/*
const localState = loadState()
const store = createStore(reducer, localState)


store.subscribe(throttle(()=>{
    saveState(store.getState())
},1000))
*/

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
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
