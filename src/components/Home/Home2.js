import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a skilled software developer with extensive experience in 
              <i>
                <b className="purple"> Java and Python</b>
              </i>
              , specializing in backend web development. 
              <br />
              Over the years, I have learned and gained experience working with back-end systems, databases, and front-end frameworks to deliver scalable and efficient applications.
              <br />
              My experience spans modern frameworks such as
              <i>
                <b className="purple">
                  {" "}
                  Spring Boot and Django,{" "}
                </b>
              </i>
              alongside robust database solutions like
              <i>
                <b className="purple">
                  {" "}
                  MySQL, MongoDB, and Redis,
                </b>
              </i>
              <br />
              I also have hands-on experience with popular middleware and tools, including
              <i>
                <b className="purple">
                  {" "}
                  Google Cloud, Docker, Kubernetes, RabbitMQ, {" "}
                </b>
              </i>
              enabling me to build robust, scalable, and efficient systems.
              <br />
              I am well-versed in <b className="purple">Object-Oriented Programming</b>, <b className="purple">test-driven development</b>, and implementing <b className="purple">CI/CD</b> pipelines to streamline development and deployment processes.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="profile pic" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
