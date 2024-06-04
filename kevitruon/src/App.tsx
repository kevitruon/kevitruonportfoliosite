import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div id="Home"></div>
      <Hero />
      <About />
      <Skills />
      <div id="Portfolio"></div>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
