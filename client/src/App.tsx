import React,{ useEffect, useState }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data);
  //     }
  //   )
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>        
      </header>
      <main>
        <HeroBanner/>
        <Projects/>
        <Technologies/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
