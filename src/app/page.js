import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <header className='flex justify-between items-center px-20 my-3'>
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
            <p className='text-[12px] text-gray-600'>Fullstack Web Developer</p>
          </div>
        </div>
        <div>
          <nav className='space-x-4 text-gray-600'>
            <Link href={'#intro-section'}>About</Link>
            <Link href={'#skills-section'}>Skills</Link>
            <Link href={'#projects-section'}>Projects</Link>
            <Link href={'#experience-section'}>Experience</Link>
          </nav>
        </div>
      </header>
      <hr className='border-t w-full border-gray-300' />
      <main>
        {/* intro section */}
        <section id='intro-section'>About</section>

        {/* skill section */}
        <section id='skills-section'>Skill</section>

        {/* projects section */}
        <section id='projects-section'></section>

        {/* work experience */}
        <section id='experience-section'></section>
      </main>
      <footer></footer>
    </div>
  )
}
