import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function ProjectCard({ image, title, description, tags }) {
  return (
    <div className='bg-white overflow-hidden rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition h-full  md:max-h-[80%]'>
      {/* Image */}
      <Link href={`/projects/`}>
        <div className='w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50'>
          <Image
            src={image == null || image.length === 0 ? '/project.jpg' : image}
            alt={title}
            className='object-contain w-full'
            width={50}
            height={50}
          />
        </div>

        {/* Title */}
        <h3 className='mt-6 text-lg font-semibold text-gray-900'>{title}</h3>

        {/* Description */}
        <p className='mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3'>
          {description}
        </p>

        {/* Footer: Tag + Arrow */}
        <div className='mt-4 flex items-center justify-between'>
          <div className='space-x-2 space-y-2'>
            {Array(3)
              .fill(1)
              .map((item, id) => (
                <span
                  key={id}
                  className='inline-block px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full'
                >
                  {tags[id]}
                </span>
              ))}
          </div>

          <FaArrowRight className='w-4 h-4 text-green-600' />
        </div>
      </Link>
    </div>
  )
}
