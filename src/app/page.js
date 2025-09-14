import Image from 'next/image'
import {
  FaDownload,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
} from 'react-icons/fa'

export default function Home() {
  return (
    <div className='pt-20  flex flex-col w-full h-screen items-center gap-7'>
      <div className='rounded-full overflow-hidden w-40 h-40 border-white border-2'>
        <Image
          src={'/avatar.jpg'}
          width={160}
          height={160}
          alt='avater'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <p className='md:text-3xl text-2xl font-bold'>Duy Nguyen Duc Thanh</p>
        <p className='text-lg italic text-main2'>Fullstack Web Developer</p>
      </div>
      <p className='md:w-[50%] w-[80%] text-gray-600'>
        I am a <b>Software Engineer</b> graduated from the{' '}
        <b>University of Information Technology, VNU-HCM</b>. I have experience
        in{' '}
        <b>
          JavaScript, Java, Node.js (Express), Spring Boot, Next.js,
          React.js{' '}
        </b>
        and databases such as <b>MongoDB, MySQL, and Redis</b>. I also work with{' '}
        <b>Docker, AWS, and Kafka </b>to build scalable and efficient
        applications.
      </p>

      <div className='flex md:gap-7 gap-3 items-center  flex-col md:flex-row'>
        <a
          href='/CV_Nguyen_Duc_Thanh_Duy.pdf'
          className='flex items-center space-x-2 px-4 py-2 border-white border-2 bg-main2 text-white rounded-sm'
        >
          <FaDownload size={20} />
          <span>Download CV</span>
        </a>

        <div className='w-fit h-fit flex gap-2 '>
          <a
            href='mailto:ndt.duy.dev@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-red-500 text-white rounded-full h-fit hover:bg-red-600'
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href='https://www.linkedin.com/in/ndtduy/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-blue-500 text-white rounded-full h-fit hover:bg-blue-600'
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href='https://github.com/DuyDangCode'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 w-fit'
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
