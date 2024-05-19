import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import td from "../assets/projects/TD.png";
import tf from "../assets/projects/TF.png";
import pm from "../assets/projects/PM.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tf}
              isBlog={false}
              title="Tutor Finder"
              description="This platform features a interface built with reactJs and CSS. It helps the students to search the best tutors around based on gender, state, city and subject with the integration of Solr search engine. platform allows for full CRUD operations on profiles of students and tutors, to book the sessions of tutors with the integration of Razor pay. Student and Tutors also have provision to see the booked sessions. The backend is built using NodeJs, ExpressJs and MongoDB is used as database."
              ghLink="https://github.com/DevanshiRupala/Tutor_Finder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={td}
              isBlog={false}
              title="To Do List"
              description="The To-Do List application is a robust task management tool developed with the MERN stack. It offers users a seamless experience to create, manage, and track tasks efficiently. With user authentication, real-time updates, and a responsive design, this application ensures secure and accessible task management. By leveraging the power of MongoDB for data storage and React for a dynamic user interface, the To-Do List app provides a reliable and user-friendly solution for organizing daily activities."
              ghLink="https://github.com/DevanshiRupala/ToDoList"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Movie Ticket Booking System"
              description="The Movie Ticket Booking System is a comprehensive web application developed using Spring Boot and Thymeleaf, complemented by HTML and CSS for the front-end, while MySQL for database. This system enables users to browse current movies in selected theaters, and book tickets effortlessly. It also has admin panel which allows to add, update and delete movies and theatres."
              ghLink="https://github.com/DevanshiRupala/JavaProject_MovieTicketBooking"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pm}
              isBlog={false}
              title="Pharmacy Management System"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/DevanshiRupala/PharmacyManagementSystem"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects