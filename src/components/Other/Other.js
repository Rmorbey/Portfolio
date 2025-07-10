import React from "react";
import { Container} from "react-bootstrap";
import OtherCard from "./OtherCard";
import Particle from "../Particle";

function Other({content}) {
  return (
	<Container fluid className="project-section">
	  <Particle />
	  <Container>
		<h1 className="project-heading">
		  Other
		</h1>
		<h2 className="project-heading" >
		  {content?.fields.other_header}
		</h2>
		<OtherCard content={content} />
	  </Container>
	</Container>
  );
}

export default Other;