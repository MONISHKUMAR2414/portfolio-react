export type ThemeMode = 'light' | 'dark'

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  overview: string
  features: string[]
  implementation: string
  impact: string[]
  stack: string[]
  accent: 'blue' | 'orange' | 'cyan' | 'green'
  percent: number
}