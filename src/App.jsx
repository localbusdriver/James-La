import React from "react";
import "./App.css";

import Navbar from "./components/Nav/Navbar";
import ArrowUp from "./components/Nav/ArrowUp";
import Welcome from "./components/Welcome/Welcome";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About-Me/About-Me";
import Education from "./components/About-Me/Education";
import Courses from "./components/About-Me/Courses";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <ArrowUp />
      <main>
        <Welcome />
        <Projects />
        <Skills />
        <About />
        <Education />
        <Courses />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
