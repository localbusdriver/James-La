import React from "react";
import dev_productivity from "../../assets/dev_productivity.svg";

function About() {
  return (
    <section id="about-me" className="p-0">
      <div className="flex">
        <div className="w-1/2 bg-black text-center p-32">
          <h2 className="text-bold">About Me</h2>
          <h6></h6>
          <p className="max-w-1/2 py-12">
            Hi, I'm James, a passionate web developer with a strong background
            in computer science. From a young age, I was fascinated by
            technology and its potential to shape the world. This curiosity led
            me to pursue a degree in Computer Science from Victoria University.
            Throughout my education, I gained a solid foundation in programming
            languages and web development frameworks. I honed my skills by
            working on various projects and collaborating with talented
            individuals. I strive to create innovative and user-friendly
            websites that leave a lasting impression. If you are looking for a
            dedicated web developer who can bring your ideas to life, I would
            love to hear from you.
          </p>
          <button className="bg-lb border-2 rounded-none px-6 py-1">
            <a href="#contact" className="text-black text-sm">
              Contact me
            </a>
          </button>
        </div>
        <div className="w-1/2 bg-gray-16 p-32">
          <img
            src={dev_productivity}
            alt="James La"
            className="w-3/4 translate-x-1/4 translate-y-1/4"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
