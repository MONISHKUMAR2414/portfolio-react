// Anchor for the auto-computed experience stat (first day at Accenture).
export const CAREER_START = { year: 2026, month: 7 } // 1-indexed month

export interface Stat {
  value: string
  label: string
}

export function getExperienceLabel(): string {
  const start = new Date(CAREER_START.year, CAREER_START.month - 1, 1)
  const now = new Date()
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  if (months >= 12) return `${Math.floor(months / 12)}+ yr`
  return `${Math.max(months, 0)}+ mo`
}

export const personal = {
  name: 'Monish Kumar',
  firstName: 'Monish',
  lastName: 'Kumar',
  role: 'Software Engineer · Salesforce & Generative AI Developer',
  tagline:
    'I build enterprise Salesforce systems and generative AI applications — turning complex problems into reliable, scalable products.',
  eyebrow: 'SOFTWARE ENGINEER / 001',
  email: 'monishkumar.6347@gmail.com',
  phone: '+91 6369429058',
  location: 'Chennai, Tamil Nadu, India',
  company: 'Accenture',
  resumePath: '/Monish_Kumar_Resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/MONISHKUMAR2414' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/monish-kumar-s-909b92255/' },
    { label: 'Email', href: 'mailto:monishkumar.6347@gmail.com' },
  ],
}

export const stats: Stat[] = [
  { value: getExperienceLabel(), label: 'AT ACCENTURE' },
  { value: '2+ yr', label: 'DOMAIN EXPERIENCE' },
  { value: '10+', label: 'PROJECTS SHIPPED' },
  { value: '10+', label: 'TECHNOLOGIES' },
]