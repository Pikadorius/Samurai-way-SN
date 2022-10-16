import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Accordion list={['HTML', 'CSS', 'React', 'Redux']}/>
    </div>
  );
}

export default App;
