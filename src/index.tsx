import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {MessageType} from './components/Dialogs/Message/Message';
import {PostType} from './components/Profile/MyPosts/Post/Post';


const dialogsData: DialogItemType[] = [
    {user: 'Kate', userId: 1},
    {user: 'Dimych', userId: 2},
    {user: 'Petya', userId: 3},
    {user: 'Anton', userId: 4},
    {user: 'Sveta', userId: 5},
    {user: 'Andrew', userId: 6},
    {user: 'Nikita', userId: 7},
    {user: 'Petr', userId: 8},
    {user: 'Sanyok', userId: 9},
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


ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>,
    document.getElementById('root')
);