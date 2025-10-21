import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import OptimizedImage from "../OptimizedImage";

function OtherCard({content}) {
  return (
	<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
	  {content?.fields.others.map((other, index) => {
		return (
		  <Col md={4} className="project-card" key={index}>
			<Card className="project-card-view">
			  <OptimizedImage 
				src={other.other_image} 
				alt={`${other.other_title} image`}
				className="card-img-top"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				maxWidth={400}
				maxHeight={300}
				style={{ marginBottom: '20px' }}
			  />
			  <Card.Body className="project-card-body">
				<Card.Title>{other.other_title}</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
				  {other.other_description}
				</Card.Text>
				<div className='button-container'>
				  {other.link && other.link.trim() !== '' && (
					<Button variant="primary" href={other.link} target="_blank">
					  {'Link'}
					</Button>
				  )}
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
