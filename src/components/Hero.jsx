import React from 'react'

export default function Hero({data}){
  const name = data?.name || 'Mohamad Eko Prasetyo, S.Kom'
  const role = data?.role || 'Analyst System & Fullstack Programmer'
  const contact = data?.contact || {}
  
  return (
    <section className="hero-section">
      <div className="hero-content" style={{marginTop:'-30px'}}>
        <div className="hero-left">
          <h2 className="hero-greeting">HELLO</h2>
          <h1 className="hero-name">I AM {name.toUpperCase()}</h1>
          <div className="hero-actions">
            <a className="btn btn-black" href="/Mohamad Eko P CV 2025_Juni.pdf" download="resume.pdf">DOWNLOAD CV</a>
            <a className="btn btn-outline" href={`https://wa.me/${(contact.phone || '+6281289784331').replace(/[^0-9]/g, '')}`}>HIRE ME</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-frame">
            <img src={data?.photo || '/images/person1.jpg'} alt={name} />
            <div className="photo-pattern"></div>
          </div>
          <div className="photo-nav">
            <button className="nav-arrow" aria-label="Previous">←</button>
            <button className="nav-arrow" aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
