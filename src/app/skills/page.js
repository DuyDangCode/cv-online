import { SKILLS } from '@/data/skills'
import { FaServer, FaCode, FaCloud, FaLanguage } from 'react-icons/fa'

export default function SkillsPage() {
  return (
    <div className='max-w-4xl mx-auto px-4 pb-10 pt-20'>
      <h1 className='text-3xl font-bold mb-8'>My Skills</h1>

      <div className='space-y-8'>
        {/* Backend */}
        <div>
          <h2 className='text-xl font-semibold mb-3 flex items-center gap-2'>
            <FaServer className='text-gray-600' /> Backend
          </h2>
          <div className='flex flex-wrap gap-2'>
            {SKILLS.backend.map((skill, i) => (
              <span
                key={i}
                className='px-3 py-1 bg-gray-100 border rounded-full text-sm text-gray-700'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h2 className='text-xl font-semibold mb-3 flex items-center gap-2'>
            <FaCode className='text-gray-600' /> Frontend
          </h2>
          <div className='flex flex-wrap gap-2'>
            {SKILLS.frontend.map((skill, i) => (
              <span
                key={i}
                className='px-3 py-1 bg-gray-100 border rounded-full text-sm text-gray-700'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div>
          <h2 className='text-xl font-semibold mb-3 flex items-center gap-2'>
            <FaCloud className='text-gray-600' /> DevOps & Cloud
          </h2>
          <div className='flex flex-wrap gap-2'>
            {SKILLS.devops.map((skill, i) => (
              <span
                key={i}
                className='px-3 py-1 bg-gray-100 border rounded-full text-sm text-gray-700'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Non-technical */}
        <div>
          <h2 className='text-xl font-semibold mb-3 flex items-center gap-2'>
            <FaLanguage className='text-gray-600' /> Non-technical
          </h2>
          <div className='flex flex-wrap gap-2'>
            {SKILLS.nonTechnical.map((skill, i) => (
              <span
                key={i}
                className='px-3 py-1 bg-gray-100 border rounded-full text-sm text-gray-700'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
