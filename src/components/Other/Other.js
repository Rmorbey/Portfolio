import React from "react";
import { Container} from "react-bootstrap";
import OtherCard from "./OtherCard";

function Other({content}) {
  return (
	<Container fluid className="skills-section" id="other">
	  <Container>
		<h1 className="about-name">
		  Other
		</h1>
		<h2 className="about-title" >
		  {content?.fields.other_header}
		</h2>
		<OtherCard content={content} />
	  </Container>
	</Container>
  );
}

export default Other;