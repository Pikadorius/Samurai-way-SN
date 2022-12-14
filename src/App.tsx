import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App: React.FC = () => {



    return (
        <div className='App'>
            <Header list={['Video', 'Music', 'Photos']}/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route component={ProfileContainer} path={'/profile/:userId?'}/>
                <Route component={DialogsContainer} path={'/dialogs'}/>
                <Route component={UsersContainer} path={'/users'}/>
                <Route component={News} path={'/news'}/>
                <Route component={Music} path={'/music'}/>
                <Route component={Settings} path={'/settings'}/>
            </div>
        </div>
    );
}

export default App;
