// src/components/Projects.js
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    name: "Crypto Portfolio Breakdown",
    description: "This project provides a detailed analysis and breakdown of a user's cryptocurrency portfolio, helping users understand the distribution and performance of their assets.",
    imageUrl: project1,
  },
  {
    name: "Dynamic Crypto Portfolio Simulator",
    description: "This tool allows users to simulate and manage a dynamic cryptocurrency portfolio, experimenting with different investment strategies and observing potential outcomes.",
    imageUrl: project2,
  },
  {
    name: "Crypto ETF Simulator",
    description: "This simulator enables users to create and manage a simulated cryptocurrency exchange-traded fund (ETF), allowing for the exploration of diversified crypto investments and performance tracking.",
    imageUrl: project3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="my-2">
              <Card>
                <Card.Img className="card-img-top" src={project.imageUrl} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
