import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
// import Toolstack from "./Toolstack";

function Skills({content}) {
  return (
	<Container fluid className="about-section" id='skills'>
	  <Particle />
	  <Container>
		<h1 className="project-heading">
		  Skills
		</h1>
		<h2 className="project-heading">
		  {/* {content?.fields.skills_header} */}
		  Some of the technologies I've worked with.
		</h2>

		{/* <Techstack content={content}/> */}
		<Techstack />


		{/* <h1 className="project-heading">
		  Tools I use
		</h1>
		<Toolstack /> */}
	  </Container>
	</Container>
  );
}

export default Skills;