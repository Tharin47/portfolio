export interface CaseStudy {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  link?: string
}

export interface Skill {
  name: string
  category: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}


