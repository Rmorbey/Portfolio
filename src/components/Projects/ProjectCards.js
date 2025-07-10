import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

function ProjectCards({content}) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {content?.fields.projects.map((project, index) => {
        return (
          <Col md={4} className="project-card" key={index}>
            <Card className="project-card-view">
              <Card.Img variant="top" src={project.project_image} alt="card-img" />
              <Card.Body>
                <Card.Title>{project.project_title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {project.project_description}
                </Card.Text>
                <Button variant="primary" href={project.github_url} target="_blank">
                  <BsGithub /> &nbsp;
                  {'GitHub'}
                </Button>
                {"\n"}
                {"\n"}
                <Button variant="primary" href={project.demo} target="_blank" style={{ marginLeft: "10px" }}>
                  <CgWebsite /> &nbsp;
                  {"Demo"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
export default ProjectCards;
