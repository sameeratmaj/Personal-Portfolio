import React from 'react'
import ProjectCard from './ProjectCard'
import "../styles/Project.css"

import SlideIn from './SlideIn';

function Project() {
  return (
    <div className='project'>
      
        <div className='project-section'>
        <p className='tittle'>Recent Works</p>
            <SlideIn>
            <ProjectCard 
              src='Project-1.png'
              name='HomeQuest - A Home Rental App'
              year='2024'
              description='HomeQuest is a full-stack home rental platform built using the MERN stack—MongoDB, Express.js, React, and Node.js. The frontend is developed with React and styled using SCSS, with state management handled via Redux for real-time UI updates.'
              />
            </SlideIn>
            <SlideIn direction='left'>
            <ProjectCard 
              src='Project-2.png'
              name='Talkie - A Realtime Chat App'
              year='2025'
              description='Talkie is a real-time chat application built using the MERN stack-MongoDB, Express.js, React, and Node.js-integrated with Socket.IO for bi-directional communication. The frontend is developed in React with responsive UI components.'
            />
            </SlideIn>
            <SlideIn>
            <ProjectCard 
              src='Project-3.png'
              name='Meme Generator'
              year='2025'
              description='The Meme Generator is a MERN stack web app that lets users create and download custom memes. It uses React for the frontend which offers an intuitive UI and Node.js with Express.js for backend logic and image handling and rendering.'
            />
            </SlideIn>
            
            
        </div>

    </div>
  )
}

export default Project;