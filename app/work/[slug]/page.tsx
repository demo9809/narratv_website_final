import { PROJECTS } from '../../../constants';
import ProjectDetailClient from './ProjectDetailClient';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  return <ProjectDetailClient project={project} />;
}