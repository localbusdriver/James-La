import "./css/intro.css";
import React from "react";

export const Intro = () => {
  return (
    <section className="intro" id="intro">
      <h1>
        Hi, I'm James. <br />
        I'm a full stack developer
      </h1>

      <div className="intro-btns">
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="social-icons">
        <ul>
          <li>
            <a
              className="unstyled"
              href="https://www.linkedin.com/in/james-la-36565828b/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.resume.com/">resume</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
