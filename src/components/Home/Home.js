import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";

function Home({content}) {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className='main-name'>{content?.fields.landing_caption}</strong>
              </h1>
              <h2 className='heading-title'>
                {content?.fields.landing_title}
              </h2>
              <h3 className='heading-description'>
                {content?.fields.landing_main_text}
              </h3>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
