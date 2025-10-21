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
    
    // Wait for the page to load and components to be available
    const waitForElement = (selector, timeout = 10000) => {
      return new Promise((resolve, reject) => {
        const startTime = Date.now();
        
        const checkElement = () => {
          const element = document.getElementById(selector);
          if (element) {
            resolve(element);
          } else if (Date.now() - startTime > timeout) {
            reject(new Error(`Element with id "${selector}" not found within ${timeout}ms`));
          } else {
            setTimeout(checkElement, 100);
          }
        };
        
        checkElement();
      });
    };
    
    try {
      await waitForElement(selector);
      // Small additional delay to ensure lazy components are fully rendered
      await new Promise(resolve => setTimeout(resolve, 300));
      
      await scroller.scrollTo(selector, {
        duration: 500,
        smooth: true,
        offset: -75,
      });
           } catch (error) {
             if (process.env.NODE_ENV === 'development') {
               console.warn(`Could not scroll to ${selector}:`, error);
             }
             // Fallback: try to scroll anyway after a reasonable delay
      setTimeout(() => {
        scroller.scrollTo(selector, {
          duration: 500,
          smooth: true,
          offset: -75,
        });
      }, 1000);
    }
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
            <Nav className="ms-auto">
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
            <Nav className="ms-auto">
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
