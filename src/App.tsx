import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Research } from './components/Research'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Research />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}

export default App
