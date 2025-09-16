import './globals.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderNav from '@/components/headerNav'

export const metadata = {
  title: 'Duy Nguyen Duc Thanh',
  description: 'Fullstack Web Developer',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className=' fixed top-0 left-0 w-full h-fit z-50 bg-white'>
          <div className='flex justify-between items-center md:px-20 px-10 py-3 '>
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10 overflow-hidden rounded-full'>
                <Image
                  alt='avatar'
                  src={'/avatar.jpg'}
                  className='w-full h-full object-cover '
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <p className='text-sm font-semibold'>Duy Nguyen Duc Thanh</p>
                <p className='text-[12px] text-gray-600'>
                  Fullstack Web Developer
                </p>
              </div>
            </div>
            <HeaderNav />
          </div>
          <hr className='border-t w-full border-gray-300' />
        </header>
        <main className='min-h-screen z-0 mb-3'>{children}</main>
        <footer className='bg-black text-white py-10 flex items-center justify-center flex-col gap-2'>
          <p className='text-xl md:text-2xl font-bold  '>Let's Work Together</p>
          <p className='text-sm md:text-lg  text-gray-200'>
            I'm always interested in new opportunities and{' '}
            <br className='md:hidden block' /> challenging projects.
          </p>
          <p className='font-thin text-md'>ndt.duy.dev@gmail.com</p>
        </footer>
      </body>
    </html>
  )
}
