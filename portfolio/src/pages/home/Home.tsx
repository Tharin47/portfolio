import type { ReactElement } from 'react'
import { Hero } from '@/components/molecules/hero'
import { FeaturedCaseStudies } from '@/components/organisms/featured-case-studies'
import { SkillsSnapshot } from '@/components/molecules/skills-snapshot'
import { CTA } from '@/components/molecules/cta'
import { DEFAULT_CASE_STUDIES, DEFAULT_SKILLS } from '@/utils/constants'
import freelanceProjectsData from '@/data/freelance-projects.json'

const Home = (): ReactElement => {
  const name = 'Tharindu Gunawardhana'
  const role = 'UX designer/engineer'
  const valueProposition =
    "I'm a UX designer. I'm passionate about creating usable digital products. I have worked with incredibly talented people across different companies."

  // Get the SaaS project (id: "3") from freelance projects
  const saasProject = freelanceProjectsData.projects.find((p) => p.id === '3')

  // Create a case study object for the SaaS project to display on home page
  const saasCaseStudy = saasProject
    ? {
        id: '3',
        title: saasProject.title,
        description: saasProject.description,
        image: saasProject.gallery?.[0] || '/mockup1.png',
        tags: ['Dashboard Design', 'Data Viz', 'React'],
        link: '/other-projects',
      }
    : null

  // Combine case studies with the SaaS project (as freelance project)
  const allProjects = saasCaseStudy
    ? [...DEFAULT_CASE_STUDIES, saasCaseStudy]
    : DEFAULT_CASE_STUDIES

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)]">
      <Hero
        name={name}
        role={role}
        valueProposition={valueProposition}
      />
      <div className="bg-[var(--color-bg-primary)]">
        <FeaturedCaseStudies caseStudies={allProjects} />
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

