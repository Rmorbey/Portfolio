import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

function OtherCard({content}) {
  return (
	<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
	  {content?.fields.others.map((other, index) => {
		return (
		  <Col md={4} className="project-card" key={index}>
			<Card className="project-card-view">
			  <Card.Img variant="top" src={other.other_image} alt="card-img" />
			  <Card.Body className="project-card-body">
				<Card.Title>{other.other_title}</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
				  {other.other_description}
				</Card.Text>
				<div className='button-container'>
				  <Button variant="primary" href={other.link} target="_blank">
					&nbsp;
					{'Link'}
				  </Button>
				</div>
			  </Card.Body>
			</Card>
		  </Col>
		);
	  })}
	</Row>
  );
}
export default OtherCard;
