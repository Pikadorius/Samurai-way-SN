import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App= () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header list={['Video', 'Music', 'Photos']}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                        <Route component={Profile} path={'/profile'}/>
                        <Route component={Dialogs} path={'/dialogs'}/>
                        <Route component={News} path={'/news'}/>
                        <Route component={Music} path={'/music'}/>
                        <Route component={Settings} path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
