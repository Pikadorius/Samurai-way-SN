import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

const App = () => {
  return (
    <div className="App">
        <Accordion list={['HTML', 'CSS', 'React']}/>
    </div>
  );
}

export default App;
