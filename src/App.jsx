import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <a
        href="#home"
        className="fixed right-6 bottom-6 z-[1100] rounded-full bg-gradient-primary p-4 text-white shadow-[0_15px_40px_rgba(14,165,233,0.35)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400"
        aria-label="Go to top"
      >
        ↑
      </a>
    </div>
  );
}

export default App;
