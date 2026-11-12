import type { PlaceholderValue } from '@/types/site'

export type ProjectStatus = 'draft' | 'verified'

export type ProjectLinks = {
  demo: string | null
  repository: string | null
}

export type CaseStudyBlock = {
  title: string
  body: string
  isPlaceholder: boolean
}

export type ProductCapability = {
  title: string
  description: string
}

export type TechnicalStackGroup = {
  title: string
  description: string
  items: string[]
}

export type ProjectSummary = {
  slug: string
  name: string
  category: string
  period: PlaceholderValue
  summary: string
  thumbnail?: {
    src?: string
    alt: string
    label?: string
    hint?: string
  }
  stack: string[]
  focusAreas: string[]
  status: ProjectStatus
  links: ProjectLinks
}

export type ProjectDetails = {
  capabilities?: ProductCapability[]
  technicalStack?: TechnicalStackGroup[]
  caseStudy: CaseStudyBlock[]
  gallery?: {
    src?: string
    alt: string
    label: string
    hint?: string
  }[]
  gallerySlots: number
}

export type Project = ProjectSummary & ProjectDetails
