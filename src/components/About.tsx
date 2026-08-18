import { ArrowUpRight, Cpu } from 'lucide-react'
import { Particles } from '@/components/ui/Particles'
import { Reveal } from '@/components/ui/Reveal'
import { TiltCard } from '@/components/ui/TiltCard'
import { SectionHeader } from '@/components/SectionHeader'
import { personal } from '@/constants/personal'

const PROFILE_TAGS = [
  { label: 'SALESFORCE', value: 'Apex · LWC · SOQL' },
  { label: 'GEN AI / RAG', value: 'LLMs · LangChain · FAISS' },
  { label: 'FULL-STACK', value: 'React · Node · Python' },
  { label: 'CLOUD', value: 'AWS · Integrations' },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-line bg-bg">
      {/* Ambient orbs */}
      <div className="orb left-[-90px] top-[8%] h-72 w-72 bg-blue/25" />
      <div className="orb bottom-[6%] right-[-100px] h-80 w-80 bg-cyan/20 [animation-delay:4s]" />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal>
          <SectionHeader index="01" eyebrow="SYSTEM PROFILE" title="About Me" />
        </Reveal>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_340px]">
          {/* Left copy */}
          <div className="max-w-2xl">
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-muted">
                As a Software Engineer at {personal.company}, I design Salesforce architecture and build generative AI systems that
                behave like well-tested infrastructure — predictable, observable, and resilient. My work spans the full loop:
                from writing Apex and Lightning Web Components to wiring retrieval pipelines that let LLMs answer with evidence.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                I care about the boring things done well: clean interfaces, explicit contracts, error paths that degrade
                gracefully, and systems that stay legible as they grow.
              </p>
            </Reveal>

            {/* Useful profile data */}
            <Reveal delay={200}>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {PROFILE_TAGS.map((tag) => (
                  <div
                    key={tag.label}
                    className="group flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/50 hover:shadow-glow"
                  >
                    <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-blue" />
                    <div className="min-w-0">
                      <p className="label-mono text-[10px] tracking-wider text-muted">{tag.label}</p>
                      <p className="truncate text-sm font-semibold text-ink">{tag.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <a
                href="#experience"
                className="lift mt-9 inline-flex items-center gap-2 text-sm font-bold text-orange hover:text-ink"
              >
                VIEW CAPABILITY MATRIX
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* 3D blueprint module */}
          <Reveal delay={150}>
            <TiltCard className="relative mx-auto w-full max-w-[340px]">
              <div
                className="relative h-[380px] rounded-xl border border-line bg-surface p-6 shadow-card"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center justify-between" style={{ transform: 'translateZ(40px)' }}>
                  <span className="label-mono text-[11px] text-muted">ARCHITECTURE / 01</span>
                  <span className="label-mono text-[11px] text-blue">NODE_07</span>
                </div>

                {/* Rings (z-layered) */}
                <div className="relative mx-auto my-9 h-[220px] w-[220px]" style={{ transform: 'translateZ(24px)' }}>
                  <div className="orbit-ring absolute inset-0" />
                  <div className="orbit-ring-2 absolute inset-7" />

                  {/* Orbiting labels */}
                  <div className="absolute inset-0" style={{ animation: 'spin 18s linear infinite' }}>
                    <span
                      className="label-mono absolute left-1/2 top-0 -translate-x-1/2 text-xs text-blue"
                      style={{ animation: 'spin-reverse 18s linear infinite' }}
                    >
                      APIs
                    </span>
                    <span
                      className="label-mono absolute right-0 top-1/2 -translate-y-1/2 text-xs text-orange"
                      style={{ animation: 'spin-reverse 18s linear infinite' }}
                    >
                      DATA
                    </span>
                    <span
                      className="label-mono absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-cyan"
                      style={{ animation: 'spin-reverse 18s linear infinite' }}
                    >
                      AI
                    </span>
                    <span
                      className="label-mono absolute left-0 top-1/2 -translate-y-1/2 text-xs text-green"
                      style={{ animation: 'spin-reverse 18s linear infinite' }}
                    >
                      CLOUD
                    </span>
                  </div>

                  {/* Core with glow + bob + counter-spin */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(56px)' }}>
                    <div className="relative">
                      <div className="core-glow absolute inset-0 rounded-full bg-blue/40 blur-xl" />
                      <div className="bob-anim relative">
                        <div className="orbit-core relative flex h-16 w-16 flex-col items-center justify-center rounded-full border border-blue/60 bg-surface-2 shadow-glow">
                          <Cpu className="h-5 w-5 text-blue" />
                          <span className="label-mono mt-1 text-[9px] text-muted">CORE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="label-mono border-t border-line pt-4 text-center text-[10px] text-muted"
                  style={{ transform: 'translateZ(32px)' }}
                >
                  INPUT: COMPLEX PROBLEM → OUTPUT: CLEAR SYSTEM
                </div>

                <div className="scanline" />
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}