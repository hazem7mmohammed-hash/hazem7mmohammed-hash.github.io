import { About } from './components/About'
import { BeforeAfter } from './components/BeforeAfter'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Portfolio } from './components/Portfolio'
import { RecentFrames } from './components/RecentFrames'
import { Showreel } from './components/Showreel'
import { Sfx } from './components/Sfx'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showreel />
        <RecentFrames />
        <Sfx />
        <BeforeAfter />
        <Portfolio />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App