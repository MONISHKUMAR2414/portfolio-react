import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/utils/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

export function Reveal({ children, className, delay = 0, style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={cn('reveal', inView && 'in-view', className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}