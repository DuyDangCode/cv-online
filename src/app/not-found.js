'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft, FaHome } from 'react-icons/fa'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white text-gray-800'>
      <h1 className='text-6xl font-bold'>404</h1>
      <p className='text-xl mt-4'>Oops! Page not found.</p>

      <div className='flex gap-4 mt-6'>
        <button
          onClick={() => router.back()}
          className='flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition'
        >
          <FaArrowLeft /> Go Back
        </button>

        <button
          onClick={() => router.push('/')}
          className='flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 rounded-lg transition'
        >
          <FaHome /> Go Home
        </button>
      </div>
    </div>
  )
}
