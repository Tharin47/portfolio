export interface CaseStudyDetail {
  id: string
  title: string
  description: string
  mockups: string[]
  sections: CaseStudySection[]
  hero?: CaseStudyHero
  overview?: string[]
  problemSolution?: ProblemSolution
  projectGoals?: ProjectGoals
  interviews?: Interviews
  findingsInsights?: FindingsInsights
  userPersonas?: UserPersonas
  userQuotes?: UserQuotes
  personasInfo?: PersonasInfo
  userJourney?: UserJourney
  competitiveResearch?: CompetitiveResearch
  userFlow?: UserFlow
  informationArchitecture?: InformationArchitecture
  wireframes?: Wireframes
  uiDesign?: UIDesign
  figmaPrototype?: FigmaPrototype
  usabilityTesting?: UsabilityTesting
  conclusion?: Conclusion
  learningsAndNextSteps?: LearningsAndNextSteps
}

export interface CaseStudySection {
  heading: string
  content: string
}

export interface CaseStudyHero {
  outcome: string
  platform: string
  role: string
  duration: string
  tools: string[]
  heroImage: string
}

export interface ProblemSolution {
  problem: {
    paragraphs: string[]
  }
  solution: {
    paragraphs: string[]
    features?: string[]
  }
}

export interface ProjectGoals {
  introduction: string
  goals: {
    number: number
    title: string
  }[]
  details: {
    role: string
    tools: string[]
    team: string
    timeline: string
  }
}

export interface Interviews {
  paragraphs: string[]
  objectives: string[]
}

export interface Finding {
  title: string
  description: string
}

export interface Insight {
  title: string
  description: string
}

export interface FindingsInsights {
  findings: Finding[]
  insights: Insight[]
}

export interface UserPersona {
  name: string
  role: string
  age: string
  description?: string
  profileImage?: string
  techUsage?: {
    icons: string[]
    description: string
  }
  goals: string[]
  frustrations: string[]
  quote: string
  quoteAttribution?: string
  keywords?: string[]
}

export interface UserPersonas {
  personas: UserPersona[]
}

export interface UserQuote {
  number: number
  quote: string
}

export interface UserQuotes {
  quotes: UserQuote[]
}

export interface PersonasInfo {
  introduction: string[]
  whyPersonas: string
  dataUsed: string
  includedForEach: string
  impactOnDesign: string
  usedDuring: string
}

export interface UserJourney {
  introduction: string
  whyThisPath: string
  howWeTestedIt: string
  whatWeDiscovered: string[]
  whatWeImproved: string[]
  journeyMapImage: string
}

export interface CompetitiveResearch {
  banner: {
    text: string
  }
  title: string
  description: string
  image: string
}

export interface UserFlow {
  title: string
  paragraphs: string[]
  image: string
}

export interface InformationArchitecture {
  image: string
}

export interface Wireframes {
  title: string
  paragraphs: string[]
  image: string
  gallery?: string[]
}

export interface UIDesign {
  title: string
  paragraphs: string[]
  image: string
}

export interface FigmaPrototype {
  url: string
  title?: string
}

export interface Learning {
  title: string
  description: string
}

export interface NextStep {
  title: string
  description: string
}

export interface LearningsAndNextSteps {
  learnings: Learning[]
  nextSteps: NextStep[]
  cta?: {
    heading: string
    subtitle: string
  }
}

export interface UsabilityTesting {
  paragraphs: string[]
  methodology: {
    participants: string
    tasks: string[]
    observations: string[]
    feedback: string[]
  }
  keyFindings: string[]
}

export interface Metric {
  value: string
  description: string
}

export interface Conclusion {
  summary: string[]
  metrics: Metric[]
}
