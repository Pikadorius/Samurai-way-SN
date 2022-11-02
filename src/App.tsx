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
import {setPostValue, StateType} from './redux/state';

type AppType = {
    state: StateType
    addPost: (post: string) => void
    addMessage: (message: string) => void
    setPostValue: (postValue:string) => void
}

const App: React.FC<AppType> = ({state, addPost, addMessage, setPostValue}) => {
    const ProfileWithProps = () => <Profile posts={state.profilePage.posts} facts={state.profilePage.facts}
                                            addPost={addPost} setPostValue={setPostValue} postValue={state.profilePage.postValue} />
    const DialogsWithProps = () => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} addMessage={addMessage}/>
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
