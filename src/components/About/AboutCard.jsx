import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krystian Maccs </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />I am currently on a Software Engineering Program at ALX Africa
            <br />
            <br />
            Apart from coding, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If it is worth doing then it should be well done"{" "}
          </p>
          <footer className="blockquote-footer">Krystian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
