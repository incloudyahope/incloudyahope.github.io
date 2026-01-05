
import Hero from './components/Hero'
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
      <div className="nav-dots" style={{display: 'none'}}>
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
