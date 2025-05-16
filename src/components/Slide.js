import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import "../styles/Slide.css"
import SlideIn from './SlideIn';


function Slide() {
  return (
    <div className='slide'>
        <div className='slide-text'>
            <p className='tittle1'>
                Sameeratmaj Pandey
            </p>
            <p className='tittle2'>Full Stack Developer</p>
            <p className='info'>
                <Typewriter
                    words={['Hi, I’m a passionate and curious developer who loves turning ideas into impactful digital experiences. With a deep interest in solving real-world problems, I enjoy building intuitive, user-friendly applications.']}
                    loop = {false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={30}
                    deleteSpeed={0}
                    delaySpeed={15000}
                />
                </p>
            <button className='slide-btn' href='Resume.pdf' download='Resume.pdf'>
                <a href='/resume.pdf' download='Resume.pdf' className='slide-btn'>Download Resume</a>
            </button>

        </div>
        <div className='slide-photo'>
            <SlideIn>
                <div className='profile-pic'>
                    <img className='image' src="sameer.jpg" alt='image'/>
                    <span className="radiation"></span>
                </div>
            </SlideIn>
            
        </div>
    </div>
  )
}

export default Slide