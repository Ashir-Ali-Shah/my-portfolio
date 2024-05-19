// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Data Analysis', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Python', level: 95 },
    { name: 'Deep Learning', level: 70 },
    { name: 'Frontend', level: 80 },
    { name: 'Streamlit', level: 90 },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="text-center">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={4} key={index} className="my-2">
              <h4>{skill.name}</h4>
              <ProgressBar now={skill.level} label={`${skill.level}%`} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
