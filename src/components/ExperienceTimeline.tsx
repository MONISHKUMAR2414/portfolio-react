import { MousePointer2 } from 'lucide-react'
import { useState } from 'react'
import { TiltCard } from '@/components/ui/TiltCard'
import { cn } from '@/utils/cn'

const TIMELINE = [
  {
    period: 'JUL 2026 — PRESENT',
    role: 'Software Engineer · Salesforce Developer',
    org: 'Accenture',
    color: 'border-blue bg-blue/10 text-blue',
    active: true,
    points: [
      'Building scalable business logic with Apex, triggers, and batch jobs',
      'Interactive UIs with Lightning Web Components (LWC) and Aura',
      'Automation with Salesforce Flow, validation rules, and approval workflows',
      'Optimized SOQL/SOSL for data retrieval and reporting',
    ],
  },
  {
    period: '2024 — 2025',
    role: 'Software Developer Intern',
    org: 'T-Care Inc.',
    color: 'border-cyan bg-cyan/10 text-cyan',
    active: false,
    points: [
      'Built REST APIs with Spring Boot, integrated with MySQL databases',
      'Optimized data retrieval — improved performance by 30%',
      'Collaborated cross-functionally on feature delivery and testing',
    ],
  },
]

export function ExperienceTimeline() {
  const [hovered, setHovered] = useState(false)

  return (
    <TiltCard className="relative w-full">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden rounded-xl border border-line bg-surface p-7 shadow-card sm:p-9"
      >
        {/* Ambient inner orb */}
        <div className={cn('orb h-64 w-64 bg-blue/20 transition-opacity duration-500', hovered ? 'opacity-80' : 'opacity-30')} />

        {/* Header — Accenture snapshot */}
        <div className="relative flex flex-wrap items-center gap-4" style={{ transform: 'translateZ(30px)' }}>
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue text-bg text-lg font-extrabold shadow-[3px_3px_0_rgb(82_216_212_/_0.55)]">
            A
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-ink">Accenture</p>
            <p className="label-mono text-xs text-muted">Software Engineer · Salesforce Developer</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green/40 bg-green/10 px-2.5 py-1">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green" />
            <span className="label-mono text-[10px] text-green">ACTIVE</span>
          </span>
        </div>

        {/* Hint */}
        <div
          className={cn(
            'relative mt-6 flex items-center gap-2 label-mono text-xs transition-opacity duration-300',
            hovered ? 'opacity-0' : 'opacity-100 text-muted',
          )}
        >
          <MousePointer2 className="h-4 w-4 text-orange" />
          MOVE CURSOR HERE TO UNFOLD TIMELINE
        </div>

        {/* Timeline (revealed on hover) */}
        <div
          className={cn('relative mt-2', hovered && 'tl-show')}
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="pt-6">
            {TIMELINE.map((entry, index) => (
              <div
                key={entry.org}
                className="tl-item relative pb-8 pl-8 last:pb-0"
                style={{ transitionDelay: `${200 + index * 260}ms` }}
              >
                {/* Rail dot */}
                <span
                  className={cn(
                    'absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2',
                    entry.active ? 'border-blue' : 'border-cyan',
                  )}
                >
                  <span
                    className={cn(
                      'h-2 w-2 rounded-full',
                      entry.active ? 'bg-blue tl-rail-dot' : 'bg-cyan',
                    )}
                  />
                </span>
                {/* Connector */}
                <span
                  className={cn(
                    'tl-connector absolute left-[9px] top-7 bottom-2 w-px bg-line',
                    hovered ? '' : '',
                  )}
                  style={{ transitionDelay: `${300 + index * 260}ms` }}
                />

                <div
                  className={cn(
                    'label-mono inline-block rounded-full border px-2.5 py-0.5 text-[10px]',
                    entry.color,
                  )}
                >
                  {entry.period}
                </div>
                <p className="mt-2 font-bold text-ink">{entry.role}</p>
                <p className={cn('label-mono text-xs', entry.active ? 'text-blue' : 'text-cyan')}>{entry.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', entry.active ? 'bg-blue' : 'bg-cyan')} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  )
}