import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { GitHubStats } from './components/GitHubStats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-200">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
