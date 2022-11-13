import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, setNewMessageText, setPostValue, StateType} from './redux/state';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} addMessage={addMessage} setPostValue={setPostValue}
             setNewMessageText={setNewMessageText}/>,
        document.getElementById('root')
    );
}


