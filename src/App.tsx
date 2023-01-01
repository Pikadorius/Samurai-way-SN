import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App: React.FC = () => {



    return (
        <div className='App'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route component={Login} path={'/login'}/>
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
