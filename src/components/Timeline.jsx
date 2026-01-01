import React from 'react'

export default function Timeline({title, items}){
  return (
    <section className="card">
      <h2>{title}</h2>
      <div className="timeline">
        {items && items.map((it,i)=> (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <strong>{it.title}</strong>
              <div className="company small">{it.org} • <span className="period">{it.period}</span></div>
              {it.desc && <div className="desc">{it.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
