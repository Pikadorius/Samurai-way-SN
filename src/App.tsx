import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {ActionsType, StateType} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppType = {
    state: StateType
    dispatch: (action: ActionsType)=>void
}

const App: React.FC<AppType> = ({state, dispatch}) => {
    const ProfileWithProps = () => <Profile profileState={state.profilePage} dispatch={dispatch}/>
    const DialogsWithProps = () => <DialogsContainer dialogsState={state.dialogsPage} dispatch={dispatch}/>
    return (
            <div className='App'>
                <Header list={['Video', 'Music', 'Photos']}/>
                <Navbar friends={state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Route render={ProfileWithProps} path={'/profile'}/>
                    <Route render={DialogsWithProps} path={'/dialogs'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Settings} path={'/settings'}/>
                </div>
            </div>
    );
}

export default App;
