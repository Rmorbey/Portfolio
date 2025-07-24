import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";

function About({content}) {
  return (
    <Container fluid className="about-section" id='about'>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="about-name">
              About
            </h1>
            <h2 className="about-title">
              {content?.fields.about_caption}
            </h2>
            <Aboutcard content={content}/>
          </Col>
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
