import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
      
        <a href="https://github.com/sameeratmaj" target="_blank" rel="noopener noreferrer">
          <img src="github.png" alt="Github" className="social-icon" />
        </a>
        <a href="mailto:sameeratmaj.dev1602@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="email.png" alt="Email" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/sameeratmaj-pandey-47639b351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src="LinkedIn.webp" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://leetcode.com/u/Asympt0te/" target="_blank" rel="noopener noreferrer">
          <img src="leetcode.png" alt="LinkedIn" className="social-icon" />
        </a>
      </div>
      <p className="copyright">@ Made With Love By &lt; Sameeratmaj &gt;</p>
    </footer>
  );
};

export default Footer;
