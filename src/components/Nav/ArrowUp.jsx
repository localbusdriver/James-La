import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ArrowUp() {
  return (
    <a href="#nav">
      <FontAwesomeIcon
        icon={faArrowUp}
        className="arrow-up fixed bottom-20 right-20 lb w-6 h-auto cursor-pointer hover:text-white hover:scale-110 transition duration-300 ease-in-out"
      />
    </a>
  );
}

export default ArrowUp;
