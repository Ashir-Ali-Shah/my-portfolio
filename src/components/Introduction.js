// src/components/Introduction.js
import React from 'react';
import './Introduction.css';
import profile from '../assets/profile.jpg'

const Introduction = () => {
  return (
    <section id="home" className="intro-section">
      <div className="container text-center">
        <img src= {profile}  alt="Profile" className="profile-pic" />
        <h1>Hello, I'm Ashir!</h1>
        <p className="lead">I'm a data science enthusiast with a passion for turning data into actionable insights.</p>
      </div>
    </section>
  );
};

export default Introduction;
