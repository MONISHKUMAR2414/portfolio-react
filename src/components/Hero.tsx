import { ArrowRight, ChevronDown, Download, Mail } from 'lucide-react'
import type { MouseEvent } from 'react'
import photo from '@/assets/your-photo.jpg'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'
import { TiltCard } from '@/components/ui/TiltCard'
import { personal } from '@/constants/personal'

function handleMouseMove(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  const mx = (e.clientX - rect.left) / rect.width - 0.5
  const my = (e.clientY - rect.top) / rect.height - 0.5
  e.currentTarget.style.setProperty('--mx', mx.toFixed(3))
  e.currentTarget.style.setProperty('--my', my.toFixed(3))
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Blueprint grid */}
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />

      {/* Floating technical elements (cursor parallax) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* 3D orbit scene */}
        <div className="parallax absolute left-[8%] top-[14%]" style={{ perspective: '700px' }}>
          <div className="orbit-3d relative h-44 w-44">
            <div className="orbit-ring absolute inset-0" />
            <div className="orbit-ring-2 absolute inset-5" />
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue shadow-glow" />
          </div>
        </div>

        {/* 3D spinning cube */}
        <div className="parallax-soft absolute right-[28%] top-[30%]" style={{ perspective: '500px' }}>
          <div className="relative h-8 w-8">
            <div className="cube3d h-8 w-8">
              <span className="cube-face" style={{ transform: 'translateZ(16px)' }} />
              <span className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(16px)' }} />
              <span className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(16px)' }} />
              <span className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(16px)' }} />
              <span className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(16px)' }} />
              <span className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(16px)' }} />
            </div>
          </div>
        </div>

        {/* Crosshairs */}
        <div className="parallax absolute right-[12%] top-[22%] text-blue">
          <div className="relative h-10 w-10">
            <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
            <span className="absolute left-1/2 bottom-0 h-3 w-px -translate-x-1/2 bg-current" />
            <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
            <span className="absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
          </div>
        </div>

        {/* Circuit chips */}
        <div className="parallax-soft absolute left-[16%] top-[64%]">
          <div className="chip chip-green h-9 w-12 rounded-[7px]" />
        </div>
        <div className="parallax absolute right-[24%] top-[70%]">
          <div className="chip chip-orange h-7 w-10 rounded-[7px] [animation-delay:1.2s]" />
        </div>

        {/* Trace lines */}
        <div className="parallax-soft absolute left-[34%] top-[12%] h-px w-24 rotate-[-24deg] bg-gradient-to-r from-transparent via-orange to-transparent" />
        <div className="parallax absolute right-[38%] top-[14%] h-px w-32 rotate-[18deg] bg-gradient-to-r from-transparent via-cyan to-transparent" />

        {/* Coordinate labels */}
        <div className="parallax-soft absolute bottom-[18%] left-[6%] label-mono text-[11px] text-muted">
          x: 042 / y: 018
        </div>
        <div className="parallax absolute right-[6%] top-[8%] label-mono text-[11px] text-muted">
          SYS.01 // 010101
        </div>

        {/* Ambient orbs */}
        <div className="orb left-[-120px] top-[22%] h-80 w-80 bg-blue/20" />
        <div className="orb bottom-[12%] right-[-100px] h-72 w-72 bg-cyan/15 [animation-delay:3s]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-28 pt-16 lg:grid-cols-[59%_1fr] lg:px-8 lg:pt-24">
        {/* Copy */}
        <div>
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-green/40 bg-green/10 px-3 py-1.5">
            <span className="pulse-dot h-2 w-2 rounded-full bg-cyan" />
            <span className="label-mono text-xs text-green">AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <p className="fade-up mt-6 label-mono text-sm text-orange [animation-delay:0.1s]">{personal.eyebrow}</p>

          <h1 className="hero-name-3d mt-4 text-hero font-extrabold tracking-[-0.08em] text-ink">
            <span className="name-layer">
              {'Monish'.split('').map((letter, index) => (
                <span key={index} className="letter-flip" style={{ animationDelay: `${0.15 + index * 0.05}s` }}>
                  {letter}
                </span>
              ))}
            </span>{' '}
            <span className="name-layer text-blue glow-blue">
              {'Kumar'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="letter-flip"
                  style={{ animationDelay: `${0.42 + index * 0.05}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          <h2 className="flip-in mt-4 text-xl font-semibold text-ink [animation-delay:0.25s]">
            Software Engineer <span className="text-orange">·</span> Salesforce &amp; Generative AI Developer
          </h2>

          <p className="fade-up mt-5 max-w-xl text-base leading-relaxed text-muted [animation-delay:0.3s]">
            {personal.tagline}
          </p>

          <div className="fade-up mt-8 flex flex-wrap items-center gap-4 [animation-delay:0.4s]">
            <a
              href="#projects"
              className="lift inline-flex items-center gap-2 rounded-[9px] bg-blue px-6 py-3 text-sm font-bold text-bg shadow-glow hover:shadow-[0_8px_30px_-4px_rgb(100_168_255_/_0.7)]"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={personal.resumePath}
              download
              className="lift inline-flex items-center gap-2 rounded-[9px] border border-line-strong px-6 py-3 text-sm font-semibold text-ink hover:border-blue hover:text-blue"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="fade-up mt-8 flex items-center gap-5 [animation-delay:0.5s]">
            {personal.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={social.label}
                className="lift text-muted hover:text-blue"
              >
                {social.label === 'GitHub' ? <GitHubIcon className="h-5 w-5" /> : null}
                {social.label === 'LinkedIn' ? <LinkedInIcon className="h-5 w-5" /> : null}
                {social.label === 'Email' ? <Mail className="h-5 w-5" /> : null}
              </a>
            ))}
          </div>
        </div>

        {/* System status card */}
        <div className="parallax-soft fade-up [animation-delay:0.16s]">
          <TiltCard>
            <div
              className="rounded-xl border border-blue/50 bg-surface/70 p-6 shadow-card backdrop-blur-md"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center gap-4" style={{ transform: 'translateZ(32px)' }}>
                <img
                  src={photo}
                  alt="Portrait of Monish Kumar"
                  className="h-14 w-14 rounded-full border border-line-strong object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-bold text-ink">{personal.name}</p>
                  <p className="label-mono text-xs text-muted">Software Engineer</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-2.5 py-1">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" />
                  <span className="label-mono text-[10px] text-cyan">LIVE</span>
                </span>
              </div>

              <div className="mt-5 space-y-2.5" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex items-center justify-between rounded-[9px] border border-line bg-surface-2/60 px-3.5 py-2.5">
                  <span className="label-mono text-xs text-muted">Current</span>
                  <span className="text-sm font-semibold text-ink">Salesforce Developer @ {personal.company}</span>
                </div>
                <div className="flex items-center justify-between rounded-[9px] border border-line bg-surface-2/60 px-3.5 py-2.5">
                  <span className="label-mono text-xs text-muted">Focus</span>
                  <span className="text-sm font-semibold text-ink">Generative AI · RAG · Cloud</span>
                </div>
              </div>

              <div
                className="mt-5 flex items-center gap-2 border-t border-line pt-4"
                style={{ transform: 'translateZ(26px)' }}
              >
                <span className="pulse-dot h-2 w-2 rounded-full bg-green" />
                <span className="label-mono text-[11px] text-muted">SYSTEM STATUS</span>
                <span className="ml-auto label-mono text-[11px] text-green">OPERATIONAL</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-6 hidden items-center gap-2 lg:flex"
        aria-label="Scroll to about"
      >
        <span className="label-mono text-[11px] tracking-[0.2em] text-muted">SCROLL TO EXPLORE</span>
        <ChevronDown className="h-4 w-4 rotate-[-90deg] text-orange" />
      </a>
    </section>
  )
}