import { useEffect, useState } from "react";
import React from "react";
function Projects() {
  const loading = "Loading...";
  const [content, setContent] = useState(loading);

  useEffect(() => {
    const getProjects = async () => {
      try {
        let response = await fetch(`http://localhost:3000/projects`, {
          method: "GET",
          headers: {
            "Content-Type": "Application/json;charset=utf-8",
          },
        });

        if (response.ok) {
          let result = await response.json();
          console.log(result);
          setContent(result);
        } else {
          console.log("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getProjects();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="myprojects">
        <h2>My Projects</h2>
        {content === loading ? (
          <p>{loading}</p>
        ) : (
          content.map((project) => (
            <div key={project.id} className="projects-divs">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;
