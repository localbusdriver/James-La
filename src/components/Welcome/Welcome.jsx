import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Welcome() {
  return (
    <>
      <div className="text-white mb-32">
        <h1 className="">James La</h1>
        <h1 className="lb">Full Stack Developer</h1>
      </div>

      <div className="flex justify-between align-center flex-wrap">
        <div className="flex align-left w-1/2">
          <p className="text-justify">
            As a computer science student, I have been able to develop a diverse
            range of projects that represent my passion and skills in this
            field. I have consistently delivered high-quality results. Explore
            my portfolio below to discover more about my work and my skills.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <Button>
              <a href="#projects">Projects</a>
            </Button>
            <Button>
              <a href="#skills">Skills</a>
            </Button>
            <Button>
              <a href="#about-me">About</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button>
              <a href="resume.pdf" download="reume.pdf">
                Resume
              </a>
            </Button>
            <Button>
              <a
                href="https://www.github.com/localbusdriver"
                target="_blank"
                rel="noReferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="h-auto w-6 mt-1" />
              </a>
            </Button>
            <Button>
              <a
                href="https://linkedin.com/in/james-la-36565828b/"
                target="_blank"
                rel="noReferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-auto w-6 mt-1"
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
