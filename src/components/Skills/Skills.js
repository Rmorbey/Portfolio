import React from "react";
import { Container} from "react-bootstrap";
import Techstack from "./Techstack";
// import Toolstack from "./Toolstack";

function Skills({content}) {
  return (
	<Container fluid className="skills-section" id='skills'>
	  <Container>
		<h1 className="about-name">
		  Skills
		</h1>
		<h2 className="about-title">
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