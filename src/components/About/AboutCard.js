import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard({content}) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* {content?.fields.about_main_details} */}
            I'm a personable, creative and detail focused Software Engineer. As well as in general an all round supporter of people, and I am a recent Makers Academy graduate April '22 intake. When not doing the above I also search for, and then eat, the best vegan pizza in London, play games and practice singing songs as Kermit the frog. Before taking the leap into software development I worked at various Special Educational Needs Schools across London over an 8 year period. I ran communication lessons for non-verbal students, and watching them interact with the games I made, and getting to see the progress they achieved with their social skills and verbal communication was extremely rewarding. I graduated from East 15 Acting school with a first class BA degree in Acting and Contemporary Theatre. Where I spent 4 years developing my own skills of collaboration, team work, flexibility and an understanding of self worth. While working in schools I got my first glimpse into the world of coding and software development. I would assist the students in an hour of code a week. We built a lego robot and were able to control it's movements using simple lines of code. After working through the pandemic and realising that I wanted a change of career, I started to look into the possibility of re training as a software engineer. Combining my interests of building things and the possibility of tech led me to start my journey with Makers. What excites me most about tech is the seemingly unlimited potential to develop software that will have a positive impact on its users and the people around them. Software that can support people from all walks of life, especially for those who are overlooked. My future personal projects are to build the pen and paper learning resources I made for my non-verbal students, but as interactive and accessible web/mobile apps.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
