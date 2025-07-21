import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import '/Users/russellmorbey/Projects/Russell-Web-Portfolio/Portfolio/src/style.css'

function OtherCard({content}) {
  return (
	<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
		<Col md={4} className="project-card">
			<Card className="project-card-view">
			<Card.Img variant="top" alt="card-img" />
			<Card.Body className="project-card-body">
				<Card.Title>Running</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					I like to run, and I'm training for a half marathon where I'll be running in support of GOSH!
				</Card.Text>
				<div className='button-container'>
				  <Button variant="primary" href='/' target="_blank">
					&nbsp;
					{'Link'}
				  </Button>
				</div>
        	</Card.Body>
        </Card>
      </Col>
	  <Col md={4} className="project-card">
			<Card className="project-card-view">
			<Card.Img variant="top" alt="card-img" />
			<Card.Body className="project-card-body">
				<Card.Title>Cycling</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					I love to Cycle to and from about anywhere, I think its a great form of exercise as well as being great for the environment!
				</Card.Text>
				<div className='button-container'>
				  <Button variant="primary" href='/' target="_blank">
					&nbsp;
					{'Link'}
				  </Button>
				</div>
        	</Card.Body>
        </Card>
      </Col>
	  <Col md={4} className="project-card">
			<Card className="project-card-view">
			<Card.Img variant="top" alt="card-img" />
			<Card.Body className="project-card-body">
				<Card.Title>Boardgames</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					I have a group of friends that I reguarly play games with, my current favourite is Quacks!
				</Card.Text>
				<div className='button-container'>
				  <Button variant="primary" href='/' target="_blank">
					&nbsp;
					{'Link'}
				  </Button>
				</div>
        	</Card.Body>
        </Card>
      </Col>
	  <Col md={4} className="project-card">
			<Card className="project-card-view">
			<Card.Img variant="top" alt="card-img" />
			<Card.Body className="project-card-body">
				<Card.Title>Reading</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					I'm really excited for the next book in the red rising series, Red God, hopefully coming out in 2026.
				</Card.Text>
				<div className='button-container'>
				  <Button variant="primary" href='/' target="_blank">
					&nbsp;
					{'Link'}
				  </Button>
				</div>
        	</Card.Body>
        </Card>
      </Col>
	  {/* {content?.fields.others.map((other, index) => {
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
	  })} */}
	</Row>
  );
}
export default OtherCard;
