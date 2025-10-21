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
      {content?.fields.skills.map((skill, index) => {
        return (
          <Col xs={6} sm={4} md={4} className="tech-icons" key={index}>
            <h3>{skill.technology_learnt}</h3>
          </Col>
        );
      })}
    </Row>
  )
}

export default Techstack;
