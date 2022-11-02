import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addPost} from './redux/state';

ReactDOM.render(
    <App state={state} addPost={addPost} addMessage={addMessage}/>,
    document.getElementById('root')
);