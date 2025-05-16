import React from 'react'
import "../styles/Skills.css"
import SkillCard from './SkillCard'

function Skills() {
  return (
    <div className='skill'>
        <div className='skill-section'>
            <div className='recent-skill'>
                <div className='tittle'>Skills</div>
                
            </div>
            <div className='skills'>
                <SkillCard
                    tittle='HTML'
                    icon='html.png'
                />
                <SkillCard
                    tittle='CSS'
                    icon='css.png'
                />
                <SkillCard
                    tittle='JavaScript'
                    icon='javascript.png'
                />
                <SkillCard
                    tittle='Nodejs'
                    icon='nodejs.png'
                />
                <SkillCard
                    tittle='Reactjs'
                    icon='react.png'
                />
                <SkillCard
                    tittle='Reduxjs'
                    icon='redux.png'
                />
                <SkillCard
                    tittle='MongoDb'
                    icon='mongodb.png'
                />
                <SkillCard
                    tittle='Studio'
                    icon='androidstudio.png'
                />
                <SkillCard
                    tittle='Kotlin'
                    icon='kotlin.png'
                />
                <SkillCard
                    tittle='Git'
                    icon='git.png'
                />
                <SkillCard
                    tittle='Postman'
                    icon='postman.png'
                />
                <SkillCard
                    tittle='Tailwind'
                    icon='tailwindcss.png'
                />
                <SkillCard
                    tittle='Expressjs'
                    icon='express.png'
                />
                <SkillCard
                    tittle='Java'
                    icon='java.png'
                />
                <SkillCard
                    tittle='MatLab'
                    icon='matlab.png'
                />
                <SkillCard
                    tittle='Vitejs'
                    icon='vite.png'
                />



                
            </div>
            

        </div>

    </div>
  )
}

export default Skills