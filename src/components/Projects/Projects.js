import React from "react";
import { Container} from "react-bootstrap";
import CurrentProjectCard from "./currentProjectCards";
import PastProjectCard from "./pastProjectCards";

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
        <CurrentProjectCard content={content} />
        <h2 className="about-title" >
          {content?.fields.past_project_header}
        </h2>
        <PastProjectCard content={content} />
      </Container>
    </Container>
  );
}

export default Projects;