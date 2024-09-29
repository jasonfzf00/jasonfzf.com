import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jason Fu </span>.
            <br />
            My journey as a programmer started from coding for my high school robotics team.
            <br />
            During college, I delved into intensive <span className="purple">Python</span> programming for <span className="purple">data analysis</span> , which further fueled my passion for coding.
            <br />
            After a year of working in Chicago, I realized that software development was my true calling, leading me to pursue a degree in Computer Science.
            <br />
            Since then, I have focused on mastering fundamental concepts such as <span className="purple">algorithms, data structures.</span>
            <br />
            Beyond the classroom, I’ve committed to learning how to build reliable web applications, including databases like <span className="purple">MySQL, MongoDB, and Redis</span>, 
            unit testing with <span className="purple">JUnit</span>, version control with <span className="purple">git</span>, and deploying <span className="purple">CI/CD pipelines</span> using <span className="purple">Docker, Kubernetes and Jenkins</span>.
            <br />
            I would like to use the knowledge I learned over the years create solutions that address complex business challenges, while maintaining a high standard of code quality and performance.
            <br />
            <br />
            I'm also a rock climber during my free time! 🧗
            <br />
            I started climbing in 2023 and did a lot of indoor bouldering, and currently climb around V5.
            <br />
            Since I'm living in NYC now, I didn't get a chance to try outdoor climbing.
            <br />
            If you're looking for a climbing partner please let me know! Or find me at <span className="purple">Brooklyn Boulders</span>!
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
