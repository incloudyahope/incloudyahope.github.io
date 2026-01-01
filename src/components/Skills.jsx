import React from 'react'

export default function Skills({data}){
  const skills = data?.skills && data.skills.length ? data.skills : ['React','TypeScript','Node.js','REST & GraphQL','UI/UX','Testing']

  return (
    <section className="card">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((s,i)=> <span key={i} className="skill">{s}</span>)}
      </div>
    </section>
  )
}
