'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative'>
      <div className='hidden md:block'>
        <nav className='space-x-4 text-gray-600'>
          <Link href={'/'}>About</Link>
          <Link href={'/skills'}>Skills</Link>
          <Link href={'/projects'}>Projects</Link>
          <Link href={'/experience'}>Experience</Link>
        </nav>
      </div>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden text-gray-700 focus:outline-none '
      >
        {/* Hamburger icon */}
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          viewBox='0 0 24 24'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className='md:hidden flex flex-col items-center space-y-4 py-2 px-2 absolute left-[-50px] bg-white border-2 border-black '>
          <Link href={'/'} className='hover:bg-blue-200 w-full text-center'>
            About
          </Link>
          <Link
            href={'/skills'}
            className='hover:bg-blue-200 w-full text-center'
          >
            Skills
          </Link>
          <Link
            href={'/projects'}
            className='hover:bg-blue-200 w-full text-center'
          >
            Projects
          </Link>
          <Link
            href={'/experience'}
            className='hover:bg-blue-200 w-full text-center'
          >
            Experience
          </Link>
        </nav>
      )}
    </div>
  )
}
