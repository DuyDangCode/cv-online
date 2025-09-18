'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className='flex items-center gap-2 mb-3 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition'
    >
      <FaArrowLeft /> Back
    </button>
  )
}
