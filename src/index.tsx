import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import store, {reducer} from "./bll/redux-store";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {setAppFakeAC} from "./app/appReducer";

/*
const localState = loadState()
const store = createStore(reducer, localState)


store.subscribe(throttle(()=>{
    saveState(store.getState())
},1000))
*/
setInterval(()=>{
    store.dispatch(setAppFakeAC())
},1000)

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
