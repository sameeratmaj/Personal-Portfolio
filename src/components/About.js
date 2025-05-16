// about.jsx

import React from 'react';
import '../styles/About.css';
import SlideIn from './SlideIn';

const About = () => {
  const cards = [
    {
      title: "Education",
      content: "Currently pursuing B.Tech in Electrical and Electronics at Indian Institute of Technology (IIT) Patna, 2nd year UG student."
    },
    {
      title: "Projects",
      content: "Developed a Home Rental App, Meme Generator, and Smart Irrigation System, showcasing skills in full-stack development and IoT."
    },
    {
      title: "Skills",
      content: "Proficient in React, Node.js, JavaScript, and MERN stack with a strong focus on backend development."
    },
    {
      title: "Passion",
      content: "Enthusiastic about solving real-world problems through technology, hackathons, and collaborative projects."
    }
  ];

  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-grid">
        {cards.map((card, index) => (
          <SlideIn>
            <div key={index} className="about-card">
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-content">{card.content}</p>
            </div>
          </SlideIn>
        ))}
      </div>
    </div>
  );
};

export default About;
