import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Button } from "../ui/button";

import { cn } from "../../lib/utils";

const projects = [
  { key: 1, title: "Project 1", subtitle: "", description: "Description 1" },
  { key: 2, title: "Project 2", description: "Description 2" },
];

function Projects() {
  return (
    <section id="projects" className="text-left px-16 pb-2">
      <div className="header pb-20">
        <h2 className="mb-10">My Projects</h2>
        <h6>
          Welcome to my portfolio. Here you'll find a selection of my work.
        </h6>
        <h6>Explore my projects to learn more about what I do</h6>
      </div>

      <div className="content flex flex-col gap-4">
        {projects.map((project) => (
          <div className={cn("pl-4")} key={project.key}>
            <Card className="bg-black flex">
              <div>
                <img />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-white">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                {project.description}
              </CardContent>
              <CardFooter>
                <Button className="btn text-white p-2">
                  <a className="text-sm p-0">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
