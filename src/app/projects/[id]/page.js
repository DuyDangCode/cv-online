import BackButton from '@/components/backButton'
import { PROJECTS } from '@/data/projects'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FaGithub, FaTag } from 'react-icons/fa'

export default async function ProjectPage({ params }) {
  const { id } = await params
  const project = PROJECTS[id]
  if (!project) return notFound()
  return (
    <div className='max-w-4xl mx-auto px-4 pb-10 pt-20'>
      <BackButton />
      <h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
      <div className='relative w-full h-72 mb-6'>
        <Image
          src={
            project.image == null || project.image.length === 0
              ? '/project.jpg'
              : project.image
          }
          alt={project.title}
          fill
          className='object-contain rounded-xl'
        />
      </div>

      <p className='text-gray-700 whitespace-pre-line mb-6'>
        {project.description}
      </p>
      {/* GitHub links */}
      <div className='mb-6'>
        <h2 className='text-lg font-semibold mb-2 flex items-center gap-2'>
          <FaGithub /> GitHub
        </h2>
        <div className='flex flex-col gap-2'>
          {project.github.map((url, i) => (
            <a
              key={i}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-blue-600 underline hover:text-blue-800'
            >
              <FaGithub /> {url}
            </a>
          ))}
        </div>
      </div>
      {/* Tags */}
      <div className='flex flex-wrap gap-2'>
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className='flex items-center gap-1 text-xs px-3 py-1 bg-gray-100 rounded-full border text-gray-700'
          >
            <FaTag className='text-gray-500' /> {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
