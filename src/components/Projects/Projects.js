import React from "react";
import { Container} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects({content}) {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects
        </h1>
        {/* <h2 className="project-heading" >
          {content?.fields.project_header}
        </h2> */}
        <h2 className="project-heading" >
          A few Projecys past and present that I've worked on.
        </h2>
        {/* <ProjectCard content={content} /> */}
        <ProjectCard />
      </Container>
    </Container>
  );
}

export default Projects;