import type { ReactElement } from 'react'
import { Heading } from '@/components/atoms/heading'
import type { SkillsSnapshotProps } from './SkillsSnapshot.types'

const SkillsSnapshot = ({
  skills,
  title = 'Skills',
}: SkillsSnapshotProps): ReactElement => {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>
  )

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <Heading level={2} className="text-center mb-8 sm:mb-10 md:mb-12 text-[var(--color-text-primary)]">
          {title}
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-[var(--color-bg-tertiary)] border border-[var(--color-border-secondary)] rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-[var(--color-bg-quaternary)] border border-[var(--color-border-primary)] text-[var(--color-text-tertiary)] rounded-full text-sm font-medium hover:border-[var(--color-purple-tertiary)] hover:text-[var(--color-purple-secondary)] transition-colors duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { SkillsSnapshot }

