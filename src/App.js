import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DownloadResume from './components/DownloadResume';
import CareerTimeline from './components/CareerTimeline';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import GalaxyBackground from './components/GalaxyBackground';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <GalaxyBackground />
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DownloadResume />
      <CareerTimeline />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;

