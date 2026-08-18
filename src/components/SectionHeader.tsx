interface SectionHeaderProps {
  index: string
  eyebrow: string
  title: string
}

import { Reveal } from '@/components/ui/Reveal'

export function SectionHeader({ index, eyebrow, title }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="mb-14">
        <div className="flex items-center gap-3">
          <span className="label-mono text-sm text-blue">{index}</span>
          <span className="label-mono text-sm text-orange">{eyebrow}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-blue/50 to-transparent" />
        </div>
        <h2 className="mt-4 max-w-3xl text-display font-extrabold tracking-[-0.03em] text-ink">{title}</h2>
      </div>
    </Reveal>
  )
}