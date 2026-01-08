import type { CaseStudy, Skill } from '@/types/home.types'

export interface HomeProps {
  name: string
  role: string
  valueProposition: string
  intro?: string
  caseStudies?: CaseStudy[]
  skills?: Skill[]
}

