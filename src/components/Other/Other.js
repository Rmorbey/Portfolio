import React from "react";
import { Container} from "react-bootstrap";
import OtherCard from "./OtherCard";

function Other({content}) {
  return (
	<Container fluid className="skills-section" id="other">
	  <Container>
		<h1 className="project-heading">
		  Other
		</h1>
		{/* <h2 className="project-heading" >
		  {content?.fields.other_header}
		</h2> */}
		<h2 className="project-heading" >
		  Some other things I like doing
		</h2>
		<OtherCard content={content} />
	  </Container>
	</Container>
  );
}

export default Other;