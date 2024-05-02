import React from "react";
import {
  html,
  css,
  js,
  reactLogo,
  bootstrap,
  tailwind,
} from "../../assets/logos/frontend/index";
import {
  python,
  java,
  cpp,
  nodejs,
  express,
  openCV,
  pytorch,
  SKLearn,
  tensorFlow,
  flask,
} from "../../assets/logos/backend/index";
import { git, github, ue5, blender } from "../../assets/logos/other/index";

const frontendSkills = [
  { id: 1, name: "HTML", src: html },
  { id: 2, name: "CSS", src: css },
  { id: 3, name: "Js", src: js },
  { id: 4, name: "React", src: reactLogo },
  { id: 5, name: "Bootstrap", src: bootstrap },
  { id: 6, name: "Tailwind CSS", src: tailwind },
]

const backendSkills = [
  { id: 1, name: "Python", src: python },
  { id: 2, name: "Java", src: java },
  { id: 3, name: "C++", src: cpp },
  { id: 4, name: "OpenCV", src: openCV },
  { id: 5, name: "Pytorch", src: pytorch },
  { id: 6, name: "SKLearn", src: SKLearn },
  { id: 7, name: "TensorFlow", src: tensorFlow },
  { id: 8, name: "Flask", src: flask },
  { id: 9, name: "Node", src: nodejs },
  { id: 10, name: "Express", src: express },
]

const otherSkills = [
  { id: 1, name: "Git", src: git },
  { id: 2, name: "Github", src: github },
  { id: 3, name: "UE5", src: ue5 },
  { id: 4, name: "Blender", src: blender },
]

export { frontendSkills, backendSkills, otherSkills };