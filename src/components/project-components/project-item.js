import React from "react";

function ProjectItem({ id, name, subtitle, url, description, technologies }) {
  return (
    <div className="project-item" key={id}>
      <h2>{name}</h2>
      <h3>{subtitle}</h3>
      <div class="img-div">
        <img src="../../assets/img/skills1.png" alt="Restful Web Application" />
      </div>
      <p>{description}</p>
      <div className="technologies">
        <ul>
          {technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ProjectItem;
