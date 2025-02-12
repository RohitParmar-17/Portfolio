import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inotebook from "../../Assets/Projects/inotebook.png";
import textutils from "../../Assets/Projects/textutils.png";
import newsmaster from "../../Assets/Projects/newmaster.png";
import placement from "../../Assets/Projects/placement.png";
import whatsapp from "../../Assets/Projects/whatsapp.png";
import google from "../../Assets/Projects/google.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import ipl from "../../Assets/Projects/ipl.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inotebook}
              isBlog={false}
              title="iNotebook"
              description="A secure platform for users to manage their notes efficiently. It includes a login and signup system, ensuring each user's notes are stored separately based on their unique ID. Users can create,update,and delete their notes efficiently. The application ensures data privacy and smooth note management with a user-friendly interface."
              ghLink="https://github.com/RohitParmar-17/iNotebook"
              demoLink="https://inotebook-frontend-yn1d.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsmaster}
              isBlog={false}
              title="NewsMaster"
              description="A real-time news application that categorically organizes the latest headlines. It features infinite scrolling, allowing users to seamlessly browse news without pagination. The app fetches live updates from news APIs, ensuring up-to-date information."
              ghLink="https://github.com/RohitParmar-17/NewsMaster"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="A text manipulation tool that provides various utilities like word count, character count, and text formatting. Users can convert text to uppercase, lowercase, remove extra spaces, and more. It offers a simple and responsive UI for quick text processing. The app enhances productivity with real-time text analysis features."
              ghLink="https://github.com/RohitParmar-17/Text-Utils-React"
              demoLink="https://realtextutils.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsapp}
              isBlog={false}
              title="WhatsApp Chat Analyzer"
              description="A data analysis tool that extracts insights from WhatsApp chat exports. It provides statistics like message count, most active users, word frequency, and media sharing trends. The tool visualizes chat patterns using graphs and charts for better understanding. It helps users analyze conversations efficiently with a user-friendly interface."
              ghLink="https://github.com/RohitParmar-17/WhatsAppChatAnalysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placement}
              isBlog={false}
              title="Placement Management System"
              description="A Python-MySQL-based application that streamlines the campus recruitment process. It allows admins to manage student records, job postings, and company details efficiently. Students can register, update their profiles, and apply for jobs, while companies can shortlist candidates. The system ensures smooth placement tracking with secure database management."
              ghLink="https://github.com/RohitParmar-17/Placement_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipl}
              isBlog={false}
              title="Ipl Win Predictor"
              description="A machine learning-based project that predicts the winning team in an IPL match based on various factors. It uses historical match data, team performance, player statistics, and venue details to generate predictions. The model processes real-time inputs and provides probability-based outcomes. With an intuitive interface, it helps cricket enthusiasts analyze match-winning chances effectively."
              ghLink="https://github.com/RohitParmar-17/IPL_Win_Predictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google Assistant Clone"
              description="A voice-enabled AI assistant built using Python that can perform task like answering queries.It integrates speech recognition and text-to-speech to enable interactive communication."
              ghLink="https://github.com/RohitParmar-17/Google_Assistant_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="AI ChatBot"
              description="A deep learning-based conversational bot built using Python, TensorFlow, and NLTK. It processes user input, predicts intent, and responds based on predefined intents stored in a JSON file. The model is trained using a neural network and utilizes word embeddings for better understanding. This chatbot can be integrated into various applications for automated customer support and virtual assistance.."
              ghLink="https://github.com/RohitParmar-17/AI_Chatbot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
