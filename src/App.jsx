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
      <div className="scroll-watcher" />
      <Navbar />
      <ArrowUp />
      <main>
        <section id="welcome" className="text-left mt-auto px-32 fade-out">
          <Welcome />
        </section>
        <section id="projects" className="text-left px-32 pb-2">
          <Projects />
        </section>
        <section id="skills" className="bg-black pb-0 ">
          <Skills />
        </section>
        <section id="about-me" className="p-0">
          <About />
          <section id="education" className="p-0">
            <Education />
          </section>
          <section id="courses" className="w-full flex flex-row gap-10">
            <Courses />
          </section>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
