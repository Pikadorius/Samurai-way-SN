import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';


/*
const dialogsData: DialogItemType[] = [
    {name: 'Kate', id: 1},
    {name: 'Dimych', id: 2},
    {name: 'Petya', id: 3},
    {name: 'Anton', id: 4},
    {name: 'Sveta', id: 5},
    {name: 'Andrew', id: 6},
    {name: 'Nikita', id: 7},
    {name: 'Petr', id: 8},
    {name: 'Sanyok', id: 9},
]

const messagesData: MessageType[] = [
    {message: 'Hi!', id: 1},
    {message: 'How are you!', id: 2},
    {message: "I'm fine, and you?", id: 3},
    {message: "YEAH! I learned how to add new messages with map method!!!!", id: 4},
    {message: "I can do it!)", id: 5},
]

const postsData: PostType[] = [
    {id: 1, name: "My  first post", description: "I try to set props to my firts post...", likesCount: 0},
    {id: 2, name: "It works, I'm very excited!", description: "Hmmm... I really enjoy the result!", likesCount: 0},
    {id: 3, name: "Dimych is the best!", description: "Dimych has a talant to teach", likesCount: 10}
]
*/


ReactDOM.render(
    <App appState={state}/>,
    document.getElementById('root')
);