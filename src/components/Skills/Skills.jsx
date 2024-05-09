import React from "react";
import {
  frontendSkills,
  backendSkills,
  otherSkills,
} from "../../assets/logos/index";
function Skills() {
  return (
    <>
      <h1 className="text-center">Technical Skills</h1>
      <div className="mx-auto my-7 w-60 h-0.5 bg-white" />
      <div className="mt-40 bg-gray-16 px-24 pb-32 pt-24 flex flex-row justify-between ">
        <div className=" w-1/3">
          <h4 className="text-center">Frontend</h4>
          <div className="grid grid-rows-2 skills-grid">
            {frontendSkills.map((skill) => (
              <img src={skill.src} alt={skill.name} key={skill.id} className=""/>
            ))}
          </div>
        </div>

        <div className="w-1/3">
          <h4 className="text-center">Backend</h4>
          <div className="grid grid-rows-3 skills-grid">
            {backendSkills.map((skill) => (
              <img
                src={skill.src}
                alt={skill.name}
                key={skill.id}
                width={skill.id === 7 ? 80 : "auto"}
                height={skill.id === 7 ? 80 : "auto"}
                className=""
              />
            ))}
          </div>
        </div>

        <div className="w-1/3">
          <h4 className="text-center">Other</h4>
          <div
            className="grid grid-rows-1 skills-grid"
            style={{ "gridTemplateColumns": "repeat(4, 75px)" }}
          >
            {otherSkills.map((skill) => (
              <img src={skill.src} alt={skill.name} key={skill.id} className=""/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
