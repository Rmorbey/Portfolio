import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard({content}) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {content?.fields.about_main_details}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
