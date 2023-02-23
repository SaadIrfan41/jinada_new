import Breadcrums from '@/components/Breadcrums'
import { PageWrapper } from '@/components/Page-Wrapper'
import { FacebookSvg, InstagramSvg, TwitterSvg } from '@/components/Svgs'
import Testinomials from '@/components/Testinomials'
import React from 'react'
// import { motion } from 'framer-motion'

const ProjectDetails = () => {
  return (
    <div>
      <div className=' w-full relative pt-48 pl-10 pb-16 xl:pb-48 lg:pl-20 bg-[url(/project05.png)] bg-cover bg-center xl:pt-48  2xl:pl-96 text-white'>
        <div className='max-w-xs md:max-w-md xl:max-w-2xl '>
          <b className='font-extrabold text-5xl md:text-6xl lg:text-7xl   '>
            e.Oliver
          </b>
          <p className='mt-5 leading-[29px] mb-5 text-base font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className='mt-[-40px]  md:mt-[-10px] z-10 '>
        <Breadcrums />
      </div>
      <div className=' grid grid-cols-1 lg:grid-cols-2  gap-14 '>
        <div className='col-span-1 lg:ml-auto mx-auto mt-28'>
          <img
            src='/project05.png'
            className=' w-[43.75rem] h-[28.75rem] '
            alt=''
          />
          <img
            src='/project05.png'
            className=' w-[43.75rem] h-[28.75rem] '
            alt=''
          />
        </div>
        <div className=' col-span-1 row-span-full lg:row-auto'>
          <div className='  relative  grid lg:place-content-start place-content-center lg:pl-9  pl-5 md:pt-16 lg:pt-14 pt-5  mt-14'>
            <div className='w-full'>
              <h1
                style={{ zIndex: -1 }}
                className=' font-bold text-[100px] w-full sm:text-7xl text-center lg:text-start mx-auto md:text-8xl absolute top-0 left-0 text-[#F2F2F2]  '
              >
                details
              </h1>
              <p className='z-10 text-center lg:text-start text-base'>
                Project Details
              </p>
              <h2 className='z-10 text-4xl lg:text-start text-center font-extrabold'>
                e.Oliver
              </h2>
              <div className='flex mt-16'>
                <span className=' font-bold text-base text-gray-600 mr-7'>
                  SHARE:
                </span>

                <FacebookSvg fillColor='fill-gray-500' />

                <span className=' mx-5'>
                  <InstagramSvg fillColor='fill-gray-500' />
                </span>

                <TwitterSvg fillColor='fill-gray-500' />
              </div>
            </div>
            <p className=' font-medium text-base  max-w-lg mt-10 leading-7'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua
            </p>
            <div className=' mt-20'>
              <h4 className='font-bold text-base text-gray-600'>Client:</h4>
              <span className='font-medium text-base   leading-7'>
                Mark Thomas
              </span>
              <div className=' my-7'>
                <h4 className='font-bold text-base text-gray-600'>Service:</h4>
                <span className='font-medium text-base   leading-7'>
                  Store / SEO / Website / Content Writing / Email Marketing
                </span>
              </div>
              <h4 className='font-bold text-base text-gray-600'>
                Project Link:
              </h4>
              <span className='font-medium text-base   leading-7'>
                www.eOliver.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <Testinomials />
    </div>
  )
}

export default ProjectDetails
