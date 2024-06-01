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
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;