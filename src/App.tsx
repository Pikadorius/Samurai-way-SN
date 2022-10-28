import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import {StateType} from './redux/state';

type AppType = {
    appState: StateType
}

const App:React.FC<AppType> = ({appState}) => {
    const ProfileWithProps = () => <Profile posts={appState.profilePage.posts}/>
    const DialogsWithProps = () => <Dialogs dialogs={appState.dialogsPage.dialogs} messages={appState.dialogsPage.messages}/>
    return (
        <BrowserRouter>
            <div className='App'>
                <Header list={['Video', 'Music', 'Photos']}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route render={ProfileWithProps} path={'/profile'}/>
                    <Route render={DialogsWithProps} path={'/dialogs'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Settings} path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
