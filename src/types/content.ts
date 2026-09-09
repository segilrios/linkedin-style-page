export type Experience = {
  role: string
  organization: string
  period: string
  description: string
}

export type Education = {
  credential: string
  institution: string
  period: string
}

export type Contact = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  technologies: string[]
  repositoryUrl: string
  status: string
  image?: { src: string; alt: string }
  demoUrl?: string
}

export type Profile = {
  name: string
  headline: string
  introduction: string
  experience: Experience[]
  skills: string[]
  education: Education[]
  contacts: Contact[]
  cv?: { href: string; label: string }
}
