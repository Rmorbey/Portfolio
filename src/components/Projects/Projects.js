import React from "react";
import { Container} from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects({content}) {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="about-name">
          Projects
        </h1>
        <h2 className="about-title" >
          {content?.fields.current_project_header}
        </h2>
        <ProjectCard projects={content?.fields.current_projects} />
        <h2 className="about-title" >
          {content?.fields.past_project_header}
        </h2>
        <ProjectCard projects={content?.fields.past_projects} />
      </Container>
    </Container>
  );
}

export default Projects;