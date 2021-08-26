import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/hamsh.me.png";
import sku from "../../Assets/Projects/sku.png";
import webku from "../../Assets/Projects/webku.png";

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
              title="Short URL"
              description="You can use this to shorten long links, this website is called hamsh.me you can use it for free. This website is based on Mas Ipan's Ksana.in which I developed again in such a way that it is final"
              link="https://hamsh.me"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sku}
              isBlog={false}
              title="SKU Pramuka"
              description="Scout SKU is a collection of material about scouting that I have arranged in such a way to make it easier for readers to find material, I also accept input from all of you to develop this website, please send a request to add features"
              link="https://sku.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webku}
              isBlog={false}
              title="Person Web"
              description="This is my personal website, I created it with html, css, and js. Before I moved to React I mostly used html as base. You can view the website via the link below"
              link="https://ilhamshf.my.id"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
