import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";

function ProjectCards({content}) {
  const navigate = useNavigate();
  
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {content?.fields.current_projects.map((project, index) => {
        return (
          <Col md={4} className="project-card" key={index}>
            <Card className="project-card-view">
                     <OptimizedImage
                       src={project.project_image} 
                       alt={`${project.project_title} project screenshot`}
                       className="card-img-top"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       maxWidth={400}
                       maxHeight={300}
                       style={{ marginBottom: '20px' }}
                     />
                     <Card.Body className="project-card-body">
                <Card.Title>{project.project_title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {project.project_description}
                </Card.Text>
                <div className='button-container'>
                  {project.github_url && project.github_url.trim() !== '' && (
                    <Button variant="primary" href={project.github_url} target="_blank">
                      <BsGithub /> &nbsp;
                      {'GitHub'}
                    </Button>
                  )}
                  {project.demo && project.demo.trim() !== '' && (
                    <Button variant="primary" href={project.demo} target="_blank" style={{ marginLeft: "10px" }}>
                      <CgWebsite /> &nbsp;
                      {"Demo"}
                    </Button>
                  )}
                  {/* Special case for Ready & Raising project */}
                  {project.project_title && (
                    project.project_title.toLowerCase().includes('ready') || 
                    project.project_title.toLowerCase().includes('raising') ||
                    project.project_title.toLowerCase().includes('fundraising')
                  ) && (
                    <Button 
                      variant="primary" 
                      onClick={() => navigate('/ReadyRaising')} 
                      style={{ marginLeft: "10px" }}
                    >
                      <CgWebsite /> &nbsp;
                      {"View App"}
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
export default ProjectCards;
