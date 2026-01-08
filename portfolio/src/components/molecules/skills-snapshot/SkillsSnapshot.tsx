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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <Heading level={2} className="text-center mb-8 sm:mb-10 md:mb-12 text-white">
          {title}
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-[#1a1a24] border border-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-[#2a2a34] border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:border-purple-500 hover:text-purple-400 transition-colors duration-200"
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

