import React from 'react'
import "../styles/SkillCard.css"

function SkillCard({tittle,icon}) {
  return (
    <div className='skillcard'>
        <div className='card'>
            <div className='image'>
              <img src={icon} className='icon'/>
            </div>
            <p className='tittle'>{tittle}</p>
        </div>
    </div>
  )
}

export default SkillCard