import { About } from '@/components/About'
import { CapabilityMatrix } from '@/components/CapabilityMatrix'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { StatStrip } from '@/components/StatStrip'

export default function App() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="fixed inset-x-0 top-0 z-[70] h-px overflow-hidden">
        <span className="shimmer-bar block h-full w-1/3 bg-gradient-to-r from-transparent via-blue to-transparent" />
      </div>
      <Header />
      <main>
        <Hero />
        <StatStrip />
        <About />
        <Projects />
        <CapabilityMatrix />
        <Contact />
      </main>
      <Footer />
    </>
  )
}