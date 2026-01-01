import React from 'react'

export default function SkillsGrid({data}){
  const sections = data?.skillsSections || []

  return (
    <section className="card skills-card">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {sections.map((sec,si)=> (
          <div key={si}>
            <h3>{sec.title}</h3>
            <div>
              {sec.items.map((it,ii)=> (
                <div key={ii} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-name">{it.name}</span>
                      <span className="skill-level">{it.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{width:`${it.level}%`}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
