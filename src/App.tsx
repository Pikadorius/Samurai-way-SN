import React from 'react';
import './App.css';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div className="App">
        <Technologies list={['HTML', 'CSS', 'React']}/>
    </div>
  );
}

export default App;
