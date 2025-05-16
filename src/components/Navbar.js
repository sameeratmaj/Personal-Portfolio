import React from 'react'
import "../styles/Navbar.css"


const Navbar = ({ onAboutClick, onProjectsClick, onSkillsClick, onContactClick }) => {
  return (
    <nav className="navbar">
      <ul className='navbar-info'>
        <li className='links' onClick={onAboutClick}>About</li>
        <li className='links' onClick={onSkillsClick}>Skills</li>
        <li className='links' onClick={onProjectsClick}>Works</li>
        <li className='links' onClick={onContactClick}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar