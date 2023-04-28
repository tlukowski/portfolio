import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <HeroBanner/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
