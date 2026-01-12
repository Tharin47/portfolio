import type { ReactElement } from 'react'
import { Hero } from '@/components/molecules/hero'
import { FeaturedCaseStudies } from '@/components/organisms/featured-case-studies'
import { SkillsSnapshot } from '@/components/molecules/skills-snapshot'
import { CTA } from '@/components/molecules/cta'
import { DEFAULT_CASE_STUDIES, DEFAULT_SKILLS } from '@/utils/constants'

const Home = (): ReactElement => {
  const name = 'Tharindu Gunawardhana'
  const role = 'UX designer/engineer'
  const valueProposition =
    "I'm a UX designer. I'm passionate about creating usable digital products. I have worked with incredibly talented people across different companies."

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)]">
      <Hero
        name={name}
        role={role}
        valueProposition={valueProposition}
      />
      <div className="bg-[var(--color-bg-primary)]">
        <FeaturedCaseStudies caseStudies={DEFAULT_CASE_STUDIES} />
        <SkillsSnapshot skills={DEFAULT_SKILLS} />
        <CTA
          title="Ready to work together?"
          description="Let's discuss your next project and bring your vision to life."
          primaryAction={{
            label: 'View All Case Studies',
            href: '#case-studies',
          }}
          secondaryAction={{
            label: 'Get In Touch',
            href: '/contact',
          }}
        />
      </div>
    </main>
  )
}

export { Home }

