export type Lang = 'en' | 'ar'

export type LocalizedString = Record<Lang, string>

export type ProjectCategory = 'commercials' | 'music' | 'social' | 'docs'

export interface Project {
  id: string
  title: LocalizedString
  category: ProjectCategory
  description: LocalizedString
  tools: string[]
  duration: string
  year: string
  src: string
  poster?: string
}

export interface ExperienceItem {
  id: string
  role: LocalizedString
  org: LocalizedString
  period: LocalizedString
  location: LocalizedString
  points: LocalizedString[]
}

export interface Skill {
  name: string
}

export interface SkillGroup {
  id: string
  label: LocalizedString
  items: Skill[]
}

export interface Frame {
  id: string
  title: LocalizedString
  duration: string
  year: string
  src: string
}