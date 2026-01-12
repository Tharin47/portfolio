import type { CaseStudy, Skill } from '@/types/home.types'
import caseStudiesData from '@/data/case-studies.json'

export const DEFAULT_CASE_STUDIES: CaseStudy[] = caseStudiesData.caseStudies.map(
  (cs) => ({
    id: cs.id,
    title: cs.title,
    description: cs.description,
    image: cs.image,
    tags: cs.tags,
    link: cs.link,
  })
)

export const DEFAULT_SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Figma', category: 'Design' },
  { name: 'Adobe XD', category: 'Design' },
  { name: 'User Research', category: 'Design' },
  { name: 'Prototyping', category: 'Design' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
]

