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
        {/* <h2 className="project-heading" >
          {content?.fields.project_header}
        </h2> */}
        <h2 className="about-title" >
          A few Projects past and present that I've worked on.
        </h2>
        {/* <ProjectCard content={content} /> */}
        <ProjectCard />
      </Container>
    </Container>
  );
}

export default Projects;