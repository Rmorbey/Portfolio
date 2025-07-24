import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import vecteezyLogo from "../Assets/vecteezyResize3.png";

function Footer({content}) {
  return (
    <Container fluid className="footer">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md="4" className="footer-copywright">
          <h3>Made by Russell Morbey</h3>
        </Col>
        <Col md="2" className="footer-copywright">
          <a href={content?.fields.buttercms_link}>
            <img src={content?.fields.buttercms_logo} alt="Your Logo" />
          </a>
        </Col>
        <Col md="2" className="footer-copywright">
          <a href="https://www.vecteezy.com/free-vector/abstract">
            <img src={vecteezyLogo} alt='Abstract Vectors by Vecteezy'/>
          </a>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Rmorbey/Russell-CV"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/russell-morbey-706063246/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
