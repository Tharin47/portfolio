import type { CaseStudy, Skill } from '@/types/home.types'

export const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'StreetBite - Street food. Zero wait.',
    description:
      'A Minimalist Real-Time App for Discovering and Pre-Booking Street Food',
    tags: ['Mobile App', 'UX Design', 'Real-Time'],
    link: '#',
  },
  {
    id: '2',
    title: 'Redesigning Wristband Monkey\'s Online Experience',
    description:
      'Transforming a cluttered wristband store into a simple, visual-first experience for teachers, students, and fundraisers.',
    tags: ['Web Design', 'E-Commerce', 'UX Research'],
    link: '#',
  },
  {
    id: '3',
    title: 'SaaS Dashboard',
    description:
      'Comprehensive dashboard design for a SaaS platform with data visualization and analytics.',
    tags: ['Dashboard Design', 'Data Viz', 'React'],
    link: '#',
  },
]

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

