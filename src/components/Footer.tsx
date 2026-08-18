import { ArrowUp } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'
import { personal } from '@/constants/personal'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue text-bg text-sm font-extrabold">
            M
          </span>
          <span className="label-mono text-sm text-muted">MK / {year}</span>
        </div>

        <div className="label-mono text-xs text-muted">
          © {year} {personal.name}. Built with React &amp; Tailwind.
        </div>

        <div className="flex items-center gap-4">
          {personal.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted transition-colors hover:text-blue"
            >
              {social.label === 'GitHub' ? <GitHubIcon className="h-4 w-4" /> : null}
              {social.label === 'LinkedIn' ? <LinkedInIcon className="h-4 w-4" /> : null}
              {social.label === 'Email' ? <span className="text-xs">{social.label}</span> : null}
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-blue hover:text-blue"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}