import React from "react";
import { Col, Row } from "react-bootstrap";
import { RiFileExcel2Fill } from "react-icons/ri";

import {
  SiVisualstudiocode,
  SiJupyter,
  SiGooglecolab,
  SiRender,
  SiGithub,
  SiUbuntu,
  SiTableau,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Fill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
    </Row>
  );
}

export default Toolstack;
