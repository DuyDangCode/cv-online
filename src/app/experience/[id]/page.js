import BackButton from '@/components/backButton'
import { EXPERIENCES } from '@/data/experience'
import { notFound } from 'next/navigation'
import { FaBuilding, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'

export default async function ExperiencePage({ params }) {
  const { id } = await params
  console.log(id)
  const experience = EXPERIENCES[id]
  if (!experience) return notFound()

  return (
    <div className='max-w-3xl mx-auto px-4 pb-10 pt-20'>
      <BackButton />

      <h1 className='text-3xl font-bold mb-2'>{experience.position}</h1>

      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-gray-600'>
        <p className='flex items-center gap-2'>
          <FaBuilding className='text-gray-500' />
          {experience.company}
        </p>
        <p className='flex items-center gap-2 mt-2 sm:mt-0'>
          <FaCalendarAlt className='text-gray-500' />
          {experience.duration}
        </p>
      </div>

      {experience.companyUrl && (
        <p className='mb-6'>
          <span className='font-semibold'>Company website: </span>
          <a
            href={experience.companyUrl}
            target='_blank'
            className='text-blue-600 hover:underline'
          >
            {experience.companyUrl}
          </a>
        </p>
      )}

      {experience.description && (
        <p className='text-gray-700 mb-6'>{experience.description}</p>
      )}

      <div>
        <h2 className='text-lg font-semibold mb-2'>Responsibilities:</h2>
        <ul className='list-none space-y-2'>
          {experience.responsibilities.map((task, i) => (
            <li key={i} className='flex items-start gap-2'>
              <FaCheckCircle className='text-green-600 mt-1' />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
