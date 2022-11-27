import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {StoreType} from './redux/redux-store';

type AppType = {
    store: StoreType
}

const App: React.FC<AppType> = (props) => {
    const ProfileWithProps = () => <Profile store={props.store}/>
    const DialogsWithProps = () => <DialogsContainer store={props.store}/>
    return (
        <div className='App'>
            <Header list={['Video', 'Music', 'Photos']}/>
            <Navbar friends={props.store.getState().sidebar.friends}/>
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
