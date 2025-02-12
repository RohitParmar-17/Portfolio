import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myAvatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT ABOUT<span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
            I love building new projects and exploring the latest in technology.
              <br />
              <br />I have experience in
              <i>
                <b className="purple"> C++, MERN Stack, and Machine Learning. </b>
              </i>
              <br />
              <br />
              I have also contributed to &nbsp;
              <i>
                <b className="purple">Research Papers </b> expanding my knowledge in the field.
              </i>
              <br />
              <br />
              Apart from coding, I have a strong interest in <b className="purple">video editing</b> as my secondary skill.
              <br />
              <br />
              <i>
                Always eager to learn, create, and push boundaries in the <b className="purple">tech world!</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RohitParmar-17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohit-parmar-008161258/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rohitparmar1542"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
