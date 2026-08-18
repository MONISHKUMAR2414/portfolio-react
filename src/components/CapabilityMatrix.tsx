import { Check } from 'lucide-react'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { Particles } from '@/components/ui/Particles'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { ACCENT_BAR, capabilities, stackTags } from '@/constants/skills'
import { cn } from '@/utils/cn'

export function CapabilityMatrix() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-line bg-bg">
      <div className="orb left-[-80px] bottom-[10%] h-72 w-72 bg-orange/20 [animation-delay:6s]" />
      <div className="orb right-[-90px] top-[8%] h-72 w-72 bg-blue/20 [animation-delay:2s]" />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeader index="03" eyebrow="CAPABILITY MATRIX" title="Core capabilities, measured." />

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const accent = ACCENT_BAR[capability.accent]
            const Icon = capability.icon
            return (
              <Reveal key={capability.name} delay={index * 120}>
                <div className="group rounded-xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-glow">
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        'flex h-11 w-11 items-center justify-center rounded-[9px] border transition-all duration-300',
                        accent.text,
                        'border-line-strong bg-surface-2 group-hover:-translate-y-0.5 group-hover:scale-110',
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="truncate text-lg font-bold text-ink">{capability.name}</h3>
                        <span className="label-mono text-sm font-medium text-muted">{capability.percent}%</span>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
                        <div
                          className={cn('h-full rounded-full transition-all duration-700', accent.fill)}
                          style={{ width: `${capability.percent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Stack cloud */}
        <Reveal delay={200}>
          <div className="mt-10 rounded-xl border border-line bg-surface p-7">
            <p className="label-mono text-xs text-muted">ACTIVE STACK</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {stackTags.map((tag, index) => (
                <span
                  key={tag.name}
                  style={{ animationDelay: `${index * 0.12}s` }}
                  className={cn(
                    'bob-anim label-mono rounded-[9px] border px-3.5 py-2 text-xs font-medium transition-colors',
                    tag.active
                      ? 'border-blue/50 bg-blue/10 text-blue'
                      : tag.accent === 'orange'
                        ? 'border-orange/40 bg-orange/5 text-orange'
                        : 'border-line bg-surface-2 text-muted',
                  )}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <p className="label-mono mt-4 flex items-center gap-2 text-[11px] text-muted">
              <Check className="h-3.5 w-3.5 text-green" />
              CONTINUOUSLY EXPANDING · LEARNING 1 NEW TOOL / QUARTER
            </p>
          </div>
        </Reveal>

        {/* Professional timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex items-center gap-3">
              <span className="label-mono text-sm text-blue">03</span>
              <span className="label-mono text-sm text-orange">PROFESSIONAL TIMELINE</span>
              <span className="h-px flex-1 bg-gradient-to-r from-cyan/50 to-transparent" />
            </div>
            <h3 className="text-2xl font-bold tracking-[-0.02em] text-ink">
              A professional journey built on <span className="text-cyan">real, shipped outcomes</span>.
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <ExperienceTimeline />
          </Reveal>
        </div>
      </div>
    </section>
  )
}