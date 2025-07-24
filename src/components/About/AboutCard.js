import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard({content}) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" >
          <p style={{ textAlign: "justify" }}>
            {content?.fields.about_line_one}
          </p>
          <p style={{ textAlign: "justify" }}>
            {content?.fields.about_line_two}
          </p>
          <p style={{ textAlign: "justify" }}>
            {content?.fields.about_line_three}
          </p>
          <p style={{ textAlign: "justify" }}>
            {content?.fields.about_line_four}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
