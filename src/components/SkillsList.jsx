import React from 'react'

export default function SkillsList({data}){
  const categories = data?.skillsCategories || {}
  
  if (!categories || Object.keys(categories).length === 0) {
    return null
  }

  return (
    <section className="card skills-list">
      <h2>Technical Skills</h2>
      <div className="skills-categories">
        {Object.entries(categories).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3>{category}:</h3>
            <div className="skills-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

