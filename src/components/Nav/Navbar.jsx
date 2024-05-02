import React from "react";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav id="nav" className="bg-black">
      <div className="top">
        <a href="#welcome" className="logo flex gap-5">
          <img src="src/assets/portfolio-logo.svg" width={50} alt="logo" />
          James La
        </a>

        <Button className="hover:bg-black">
          <a href="#contact" className="text-black">
            Contact Me
          </a>
        </Button>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <a href="#welcome">Intro</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
