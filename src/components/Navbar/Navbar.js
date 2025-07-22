import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineTool,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await setTimeout(5000);
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
    });
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        {location !== "resume" ? (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <ScrollLink className='nav-link' to="home" offset={-75} duration={500} smooth={true}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink className='nav-link' to="about" offset={-75} duration={500} smooth={true}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink className='nav-link' to="skills" offset={-75} duration={500} smooth={true}>
                  <AiOutlineTool style={{ marginBottom: "2px" }} /> Skills 
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink className='nav-link' to="projects" offset={-75} duration={500} smooth={true}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects 
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink className='nav-link' to="other" offset={-75} duration={500} smooth={true}>
                  <AiOutlineHeart style={{ marginBottom: "2px" }} /> Other 
                </ScrollLink>
              </Nav.Item>
              <Nav.Item>
                <RouterLink className='nav-link' to="/resume"><CgFileDocument style={{ marginBottom: "2px" }} /> Resume</RouterLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link onClick={() => goToPageAndScroll("home")}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => goToPageAndScroll("about")}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => goToPageAndScroll("skills")}>
                  <AiOutlineTool style={{ marginBottom: "2px" }} /> Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => goToPageAndScroll("projects")}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => goToPageAndScroll("other")}>
                  <AiOutlineHeart style={{ marginBottom: "2px" }} /> Other
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <RouterLink className='nav-link' to="/resume"><CgFileDocument style={{ marginBottom: "2px" }} /> Resume</RouterLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        ) }
      </Container>
    </Navbar>
  );
}

export default NavBar;
