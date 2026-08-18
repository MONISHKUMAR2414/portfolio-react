import type { CSSProperties } from 'react'

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 6 + 4) % 100,
  top: (i * 12 + 18) % 100,
  size: 2 + (i % 3) * 1.5,
  duration: 6 + (i % 5) * 1.3,
  delay: (i % 8) * 0.7,
  color: i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'cyan' : 'orange',
}))

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={
            {
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color === 'blue' ? 'rgb(100 168 255 / 0.7)' : particle.color === 'cyan' ? 'rgb(82 216 212 / 0.7)' : 'rgb(255 155 84 / 0.7)',
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}