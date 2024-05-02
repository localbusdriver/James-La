import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="footer" className="pb-36">
      <div className="mx-auto mb-20 w-5/6 h-0.5 bg-white" />
      <div className="mx-auto w-5/6 flex flex-row justify-between">
        <a href="nav" className="text-3xl text-white font-bold">James La</a>
        <div className="flex w-1/3 flex-row justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm">(+64) 021-174-9208</p>
            <p className="text-sm">jamesla200210@gmail.com</p>
          </div>
          <h5 className="text-sm">Wellington, NZ</h5>
          <div className="flex flex-row gap-1">
            <a
              href="https://www.linkedin.com/in/james-la-36565828b/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:lb cursor-pointer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a
              href="https://www.github.com/localbusdriver"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:lb cursor-pointer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
