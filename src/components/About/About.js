import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
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
          <Col md={12} className="home-about-social">
            <h1 className="about-name">FIND ME ON</h1>
            <h2 className="about_title">
              Feel free to connect with me.
            </h2 >
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rmorbey/Russell-CV"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/russell-morbey-706063246/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
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
