import ProjectCard from '@/components/projectCard'
import { PROJECTS } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div className='min-h-screen pt-20 pb-10 px-20 md:px-5 md:grid-cols-3 grid-cols-1 gap-5 grid lg:grid-cols-5  h-full w-full'>
      {PROJECTS.map((project, id) => (
        <ProjectCard
          key={id}
          image={project.image}
          title={project.title}
          id={id}
          description={project.description}
          tags={project.tags}
        ></ProjectCard>
      ))}
    </div>
  )
}
