import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { TiltCard } from '@/components/ui/TiltCard'
import { SectionHeader } from '@/components/SectionHeader'
import { ACCENT_STYLES, projects } from '@/constants/projects'
import { cn } from '@/utils/cn'

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const [showDetails, setShowDetails] = useState(false)
  const active = projects.find((p) => p.id === activeId) ?? projects[0]

  function selectProject(id: string) {
    setActiveId(id)
    setShowDetails(false)
  }

  return (
    <section id="projects" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeader index="02" eyebrow="SELECTED SYSTEMS" title="Systems I have designed and shipped." />

        {/* Tabs */}
        <Reveal>
          <div
            role="tablist"
            aria-label="Projects"
            className="flex flex-wrap gap-2 rounded-[11px] border border-line bg-bg p-2"
          >
            {projects.map((project, index) => {
              const accent = ACCENT_STYLES[project.accent]
              const isActive = project.id === activeId
              return (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectProject(project.id)}
                  className={cn(
                    'lift flex flex-1 items-center justify-between gap-3 rounded-[9px] px-4 py-3 text-sm font-semibold transition-colors min-w-0',
                    isActive ? cn(accent.soft, accent.text) : 'text-muted hover:text-ink',
                  )}
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <span className="label-mono text-[11px] opacity-70">0{index + 1}</span>
                    <span className="truncate">{project.title}</span>
                  </span>
                  <span className="label-mono hidden text-[11px] sm:inline">{project.percent}%</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Display */}
        <Reveal delay={120}>
          <TiltCard>
            <div
              className={cn(
                'mt-8 grid items-center gap-10 rounded-xl border border-line bg-bg p-8 shadow-card lg:grid-cols-[1fr_240px] lg:p-10',
                `accent-${active.accent}`,
              )}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Re-animates on every tab switch */}
              <div key={active.id} className="fade-up">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'label-mono rounded-full border px-3 py-1 text-[11px]',
                      ACCENT_STYLES[active.accent].soft,
                      ACCENT_STYLES[active.accent].border,
                      ACCENT_STYLES[active.accent].text,
                    )}
                  >
                    {active.category}
                  </span>
                  <span className="label-mono text-xs text-muted">
                    {String(active.percent).padStart(2, '0')}% CONFIDENCE
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-ink">{active.title}</h3>
                <p className="mt-1 label-mono text-sm text-muted">{active.subtitle}</p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{active.description}</p>

                {showDetails ? (
                  <div className="fade-up mt-6 space-y-6 rounded-lg border border-line bg-surface p-6">
                <div>
                  <p className="label-mono text-[11px] text-blue">PROJECT OVERVIEW</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/90">{active.overview}</p>
                </div>

                <div>
                  <p className="label-mono text-[11px] text-blue">KEY FEATURES</p>
                  <ul className="mt-2 space-y-1.5">
                    {active.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
                        <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', ACCENT_STYLES[active.accent].bg)} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="label-mono text-[11px] text-blue">TECH STACK</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.stack.map((tech) => (
                      <span
                        key={tech}
                        className="label-mono rounded-[7px] border border-line bg-surface-2 px-2.5 py-1.5 text-[11px] text-ink"
                      >
                        {tech.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="label-mono text-[11px] text-blue">TECHNICAL IMPLEMENTATION</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/90">{active.implementation}</p>
                </div>

                <div>
                  <p className="label-mono text-[11px] text-blue">IMPACT & RESULTS</p>
                  <ul className="mt-2 space-y-1.5">
                    {active.impact.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
                        <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', ACCENT_STYLES[active.accent].bg)} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              aria-expanded={showDetails}
              className={cn(
                'lift mt-7 inline-flex items-center gap-2 text-sm font-bold',
                ACCENT_STYLES[active.accent].text,
              )}
            >
              {showDetails ? 'HIDE DETAILS' : 'REQUEST DETAILS'}
              {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {/* Rotating module with animated progress ring */}
          <div
            key={`module-${active.id}`}
            className="fade-up relative mx-auto hidden h-[240px] w-[240px] lg:block"
            aria-hidden="true"
          >
            <div className="proj-ring" />
            <div className="proj-ring-2" />

            {/* Orbiting accent satellite */}
            <div className="orbit-sat absolute left-1/2 top-1/2">
              <span
                className="block h-2.5 w-2.5 rounded-full"
                style={{
                  background: 'rgb(var(--project-accent) / 0.95)',
                  boxShadow: '0 0 14px rgb(var(--project-accent) / 0.8)',
                }}
              />
            </div>

            {/* Animated SVG progress ring */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                <circle cx="100" cy="100" r="88" fill="none" stroke="rgb(var(--line) / 0.6)" strokeWidth="3" />
                <circle
                  cx="100"
                  cy="100"
                  r="88"
                  fill="none"
                  stroke="rgb(var(--project-accent) / 1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="progress-ring"
                  style={
                    {
                      strokeDasharray: 553,
                      strokeDashoffset: 553 * (1 - active.percent / 100),
                      '--ring-full': '553px',
                    } as CSSProperties
                  }
                />
              </svg>
            </div>

            {/* Center percent */}
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <span className={cn('glow-accent text-3xl font-extrabold', ACCENT_STYLES[active.accent].text)}>
                {String(active.percent).padStart(2, '0')}
              </span>
              <span className="label-mono text-[10px] text-muted">%</span>
            </div>

            <span
              className={cn(
                'label-mono absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px]',
                ACCENT_STYLES[active.accent].text,
              )}
            >
              {active.id.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}