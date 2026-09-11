import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { ProjectEvidence } from './components/ProjectEvidence'
import { Skills } from './components/Skills'
import { profile } from './content/profile'
import { projectDomainEvidence, projects } from './content/projects'

function App() {
  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header name={profile.name} />
      <main id="main-content" tabIndex={-1}>
        <Hero profile={profile} />
        <Experience entries={profile.experience} />
        <Skills entries={profile.skills} />
        <Education entries={profile.education} />
        <ProjectEvidence
          entries={projectDomainEvidence}
          totalProjects={projects.length}
        />
        <Projects entries={projects} />
        <Contact contacts={profile.contacts} cv={profile.cv} />
      </main>
      <footer>
        <p>
          Original portfolio. No affiliation with or integration into LinkedIn.
        </p>
      </footer>
    </div>
  )
}

export default App
