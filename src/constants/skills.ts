import { Braces, Cloud, Layers, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Capability {
  name: string
  percent: number
  accent: 'blue' | 'orange' | 'cyan' | 'green'
  icon: LucideIcon
}

export const capabilities: Capability[] = [
  { name: 'Salesforce Architecture', percent: 92, accent: 'blue', icon: Cloud },
  { name: 'Generative AI / RAG', percent: 88, accent: 'orange', icon: Sparkles },
  { name: 'Full-stack Engineering', percent: 84, accent: 'cyan', icon: Layers },
  { name: 'Cloud & Integrations', percent: 79, accent: 'green', icon: Braces },
]

export interface StackTag {
  name: string
  active?: boolean
  accent?: 'blue' | 'orange'
}

export const stackTags: StackTag[] = [
  { name: 'APEX' },
  { name: 'LWC', active: true },
  { name: 'PYTHON' },
  { name: 'REACT' },
  { name: 'LLMs', active: true },
  { name: 'NODE' },
  { name: 'POSTGRES' },
  { name: 'AWS', accent: 'orange' },
]

export const ACCENT_BAR: Record<Capability['accent'], { fill: string; text: string }> = {
  blue: { fill: 'bg-blue', text: 'text-blue' },
  orange: { fill: 'bg-orange', text: 'text-orange' },
  cyan: { fill: 'bg-cyan', text: 'text-cyan' },
  green: { fill: 'bg-green', text: 'text-green' },
}