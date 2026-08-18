import { useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export function TiltCard({ children, className, maxTilt = 14 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(950px) rotateY(${(px * maxTilt).toFixed(2)}deg) rotateX(${(-py * maxTilt).toFixed(2)}deg) translateY(-5px)`
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn('tilt-card', className)}
    >
      {children}
    </div>
  )
}