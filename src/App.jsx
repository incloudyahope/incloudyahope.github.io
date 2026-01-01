import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import SkillsGrid from './components/SkillsGrid'
import SkillsList from './components/SkillsList'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SocialSidebar from './components/SocialSidebar'
import resume from './data/resume'

export default function App(){
  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <div className="nav-dots">
        <div className="dot active" onClick={() => scrollToSection('hero-section')}></div>
        <div className="dot" onClick={() => scrollToSection('main')}></div>
        <div className="dot" onClick={() => scrollToSection('contact-biodata')}></div>
      </div>
      <div className="container">
        <Hero data={resume} />

        <main>
          <section className="left">
            <SkillsGrid data={resume} />
            <SkillsList data={resume} />
            <Timeline title="Experience (timeline)" items={resume.experiences} />
            <Timeline title="Education" items={resume.education} />
            <Projects items={resume.projects} />
          </section>

          <aside className="right">
            <Contact data={resume} />
          </aside>
        </main>
      </div>
      <SocialSidebar data={resume} />
    </div>
  )
}
