import React,{useRef} from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'


function HomePage() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
        <Navbar
          onAboutClick={() => scrollToSection(aboutRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
          onSkillsClick={() => scrollToSection(skillsRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
        <Slide/>
      <section ref={aboutRef}><About /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={projectsRef}><Project /></section>
      <section ref={contactRef}><Contact /></section>
        <Footer/>
    </>
  )
}

export default HomePage