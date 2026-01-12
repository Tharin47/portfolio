export interface FreelanceProject {
  id: string
  title: string
  description: string
  gallery: string[]
  figmaPrototype?: {
    url: string
    title?: string
    width?: string
    height?: string
  }
}

export interface FreelanceProjectsData {
  projects: FreelanceProject[]
}

