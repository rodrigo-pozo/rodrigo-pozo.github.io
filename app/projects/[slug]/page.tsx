import { PROJECTS, getProject } from '@/app/data'
import { notFound } from 'next/navigation'
import { ProjectDetail } from './project-detail'

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
