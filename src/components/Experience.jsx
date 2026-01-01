import React from 'react'

export default function Experience({data}){
  const experiences = data?.experiences && data.experiences.length ? data.experiences : [
    {role:'Senior Frontend Developer', company:'Perusahaan X', period:'2022 — Sekarang', bullets:['Membangun UI React berkinerja tinggi','Mentor tim frontend','Optimasi waktu load 40%']},
    {role:'Frontend Developer', company:'Perusahaan Y', period:'2019 — 2022', bullets:['Implement design system','Integrasi API dan testing otomatis']}
  ]

  return (
    <section className="card">
      <h2>Experience</h2>
      {experiences.map((e,i)=> (
        <div className="exp" key={i}>
          <div className="exp-head">
            <h3>{e.role}</h3>
            <span className="period">{e.period}</span>
          </div>
          <div className="company">{e.company}</div>
          <ul>
            {(e.bullets || []).map((b,bi)=> <li key={bi}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}
