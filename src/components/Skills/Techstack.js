import React from "react";
import { Col, Row } from "react-bootstrap";
// import {
//   DiPython,
//   DiJavascript,
//   DiRuby,
//   DiPhp,
//   DiReact,
//   DiGit,
// } from "react-icons/di";
// import {
//   SiTypescript,
// } from "react-icons/si";

function Techstack({content}) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Python</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Javascript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Ruby</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>React</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Typescript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Python</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Python</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Typescript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Python</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Python</h3>
      </Col>
      {/* {content?.fields.skills.map((skill, index) => {
        return (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <h3>{skill.technology_learnt}</h3>
          </Col>
        );
      })} */}
    </Row>
  )
}

export default Techstack;
