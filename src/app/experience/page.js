// app/experiences/page.js
import { EXPERIENCES } from '@/data/experience'
import Link from 'next/link'
import { FaBuilding, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

export default function ExperiencesPage() {
  return (
    <div className='max-w-4xl mx-auto px-4 pb-10 pt-20'>
      <h1 className='text-3xl font-bold mb-8'>Work Experiences</h1>

      <div className='space-y-6'>
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className='p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white'
          >
            <h2 className='text-xl font-semibold'>{exp.position}</h2>
            <p className='flex items-center gap-2 text-gray-600 mt-1'>
              <FaBuilding className='text-gray-500' /> {exp.company}
            </p>

            <p className='flex items-center gap-2 text-gray-500 text-sm mt-1'>
              <FaCalendarAlt className='text-gray-400' /> {exp.duration}
            </p>

            <Link
              href={`/experience/${index}`}
              className='mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium'
            >
              View Details <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
