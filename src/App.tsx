import { BackgroundField } from './components/BackgroundField'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen text-text">
      <BackgroundField />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Projects />
        <Research />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}

export default App
