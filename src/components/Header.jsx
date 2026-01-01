import React from 'react'

export default function Header({data}){
  const name = data?.name || 'Mohamad Eko P'
  const role = data?.role || 'Fullstack Developer — React • Node • UI'
  const summary = data?.summary || 'Desain CV modern, ringkas, dan mudah dibaca HR. Fokus pada hasil bisnis dan kompetensi teknis.'

  return (
    <header className="header">
      <div className="avatar">ME</div>
      <div className="meta">
        <h1>{name}</h1>
        <p className="role">{role}</p>
        <p className="summary">{summary}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/Mohamad Eko P CV 2025_Juni.pdf" download="resume.pdf">Download CV</a>
          <a className="btn btn-ghost" href={`mailto:${data?.contact?.email || 'me.serj.adam@gmail.com'}`}>Hire me</a>
        </div>
      </div>
    </header>
  )
}
