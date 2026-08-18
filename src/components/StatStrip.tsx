import { Reveal } from '@/components/ui/Reveal'
import { stats } from '@/constants/personal'

export function StatStrip() {
  return (
    <section aria-label="Highlights" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 100}
            className={`flex flex-col items-center justify-center px-6 py-10 text-center ${
              index % 2 === 1 ? 'border-l border-line' : ''
            } lg:border-l lg:border-line lg:first:border-l-0`}
          >
            <p className="text-4xl font-extrabold tracking-tight text-blue">{stat.value}</p>
            <p className="label-mono mt-2 text-[11px] tracking-[0.15em] text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}