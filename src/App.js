import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
      <Certifications />
      <Contact />
      <footer className="footer">
        <p>© 2024 Nikhitha Kothakonda · Sr. Data Engineer</p>
      </footer>
    </div>
  );
}

export default App;
