import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import vecteezyLogo from "../Assets/vecteezyResize3.png";
import OptimizedImage from "./OptimizedImage";

function Footer({content}) {
  return (
    <Container fluid className="footer" style={{ minHeight: '70px', maxHeight: '80px' }}>
      <Row style={{ justifyContent: "center", paddingBottom: "5px", paddingTop: "5px", minHeight: "60px" }} className="footer-row">
        <Col xs="12" sm="12" md="4" className="footer-copywright d-flex align-items-center justify-content-center" style={{ marginBottom: '10px' }}>
          <h3 style={{ fontSize: '0.9em', margin: '0' }}>Made by Russell Morbey</h3>
        </Col>
        <Col xs="6" sm="6" md="2" className="footer-copywright d-flex align-items-center justify-content-center" style={{ marginBottom: '10px' }}>
          <a href={content?.fields.buttercms_link} style={{ display: 'flex', alignItems: 'center' }}>
            <OptimizedImage 
              src={content?.fields.buttercms_logo} 
              alt="ButterCMS Logo" 
              maxWidth={60}
              maxHeight={25}
              priority={true}
            />
          </a>
        </Col>
        <Col xs="6" sm="6" md="2" className="footer-copywright d-flex align-items-center justify-content-center" style={{ marginBottom: '10px' }}>
          <a href="https://www.vecteezy.com/free-vector/abstract" style={{ display: 'flex', alignItems: 'center' }}>
            <OptimizedImage 
              src={vecteezyLogo} 
              alt='Abstract Vectors by Vecteezy'
              maxWidth={60}
              maxHeight={25}
              priority={true}
            />
          </a>
        </Col>
        <Col xs="12" sm="12" md="4" className="footer-body d-flex align-items-center justify-content-center">
          <ul className="footer-icons" style={{ margin: '0', padding: '0', display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <li className="social-icons" style={{ listStyle: 'none' }}>
              <a
                href="https://github.com/Rmorbey/Russell-CV"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ listStyle: 'none' }}>
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
