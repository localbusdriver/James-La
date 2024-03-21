import React from 'react';
import './css/App.css';
import {Nav} from './components/Nav';
import {Intro} from './components/Intro';
import Projects from './components/Projects';
import {Skills} from './components/Skills';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}