import React from 'react'
import "../styles/ProjectCard.css"

function ProjectCard({src,name,year,description}) {
  return (
    <>
    <div className='projectcard'>
        <div className='container'>
            <div className='project-image'>
              <img src={src} className='icon'/>
            </div>
            <div className='project-details'>
              <p className='project-name'>{name}</p>
              <div className='project-year'>{year}</div>
              <div className='project-desc'>{description}</div>

            </div>
            
        </div>
    </div>
    <hr/>
    </>
  )
}

export default ProjectCard