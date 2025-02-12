import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Parmar </span>
            from <span className="purple"> Mumbai , India.</span>
            <br />
            I am currently a <span className="purple">3rd Year </span> student at DJSanghvi.
            <br />
            Department - <span className="purple">Artificial Intelligence and Data Science</span>
            <br />
            <br />
            Favourite Extracurricular Activities
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "orange" }}>
            "trust God's plan because He knows best"{" "}
          </p>
          <footer className="blockquote-footer"><span className="purple">Rohit</span></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
