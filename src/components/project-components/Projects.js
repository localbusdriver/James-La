import { useState } from "react";
import React from "react";
import ProjectItem from "./project-item";

function Projects() {
  const loading = "Loading...";
  const [content, setContent] = useState(loading);
  const getProjects = async () => {
    try {
      let response = await fetch(`https://james-la.me/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
      });

      if (response.ok) {
        let result = await response.json();
        setContent(result);
      } else {
        console.log("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
      setContent("Error loading projects");
    }
  };
  getProjects();

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="my-projects">
        {content === loading ? (
          <p>{loading}</p>
        ) : (
          content.map((project) => (
            // <div key={project.id} className="projects-div">
            //   <h3>{project.name}</h3>
            //   <p>{project.description}</p>
            // </div>
            <ProjectItem {...project} />
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;
