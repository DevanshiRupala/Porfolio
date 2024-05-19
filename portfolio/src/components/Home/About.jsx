import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <b className="yellow">Devanshi Rupala </b>
                 and I'm from <b className="yellow">Morbi, Gujrat, India.</b>
                <br />
                <br />
                I am currently pursuing a Bachelor's degree in Computer Engineering from <b className="yellow">Dharmsinh Desai University, Nadiad.</b>
                <br />
                <br />
                  I enjoy tackling new challenges and continuously expanding my skills.
                  <br />
                  <br />I have good knowledge in languages such as 
                  <b className="yellow">Javascript, C, C++, Java, Python </b>as well as databases like <b className="yellow">MongoDB, MySQL.</b>
                  <br />
                  <br />
                  I also know frameworks
                  such as <b className="yellow">Spring Boot, .Net.</b>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Machine Learning.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About