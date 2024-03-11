import "./css/nav.css";
import React from "react";

export const Nav = () => {
  return (
    <section className="header">
      <div className="navbar">
        <div className="logo">
          <a className="logo" href="#intro">
            James La
          </a>
        </div>
        <div className={"nav-links"}>
          <ul>
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
