import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils/cn'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { theme, toggleTheme } = useTheme()

  // Highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3" aria-label="Monish Kumar — home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue text-bg font-extrabold shadow-[3px_3px_0_rgb(82_216_212_/_0.55)] transition-transform duration-300 group-hover:-translate-y-0.5">
            M
          </span>
          <span className="text-sm font-bold tracking-tight text-ink">
            Monish <span className="text-blue">Kumar</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                active === link.id ? 'text-blue' : 'text-muted hover:text-ink',
              )}
            >
              {link.label}
              {active === link.id ? (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-blue shadow-[0_0_8px_rgb(100_168_255_/_0.9)]" />
              ) : null}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="theme-pill"
          >
            <span className="theme-dot" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="rounded-md p-2 text-ink transition-colors hover:bg-surface md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen ? (
        <div className="border-t border-line bg-surface px-5 py-4 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center justify-between border-b border-line py-3 text-base font-medium transition-colors last:border-0',
                  active === link.id ? 'text-blue' : 'text-ink',
                )}
              >
                {link.label}
                <span className="label-mono text-xs text-muted">0{NAV_LINKS.indexOf(link) + 1}</span>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}