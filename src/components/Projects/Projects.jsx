import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/dataschool.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="GoCreate Africa"
              description="Music management and monitoring App built with Django and React, with features that helps music artistes manage their musical properties personally."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://web.gocreateafrica.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Django Blog API"
              description="A Blog API built with Django and Django REST framework. Enables geolocation in which it returns if the day a user signed up coincides with a holiday in the user's country."
              ghLink="https://github.com/KrystianMaccs/django-blog-api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ikon"
              description="Online photo storage and sharing web application built with Django/Django REST Framework, and the JavaScript library React. It enables users to upload photos, which get stored automatically to the cloud. So even though your device goes missing, you still have your memories."
              ghLink="https://github.com/KrystianMaccs/Ikon"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Apollo"
              description="A music storage and streaming API built with Django and Django REST Framework. Users can sign up and upload music for other users to listen to."
              ghLink="https://github.com/KrystianMaccs/music-apollo.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Data School"
              description="An API built with Django/Django REST Framework. This API is a learning platform where users can sign up as instructors or as students. They can also selct modules to learn as well as take quizzes."
              ghLink="https://github.com/KrystianMaccs/data_school.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
