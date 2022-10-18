import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <div className="App">
            <Header list={['Video','Music','Photos']}/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
