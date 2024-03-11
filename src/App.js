import "./css/App.css";
import React from "react";
import { Nav } from "./components/Nav";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
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

export default App;
