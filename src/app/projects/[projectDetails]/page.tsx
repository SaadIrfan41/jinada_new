import Breadcrums from '@/components/Breadcrums'
import { PageWrapper } from '@/components/Page-Wrapper'
import React from 'react'
// import { motion } from 'framer-motion'
const testimonials = [
  { image: '/testimonial.png', id: 1 },
  { image: '/testimonial.png', id: 2 },
  { image: '/testimonial.png', id: 3 },
]

const ProjectDetails = () => {
  return (
    <div>
      <div className='h-[679px] bg-red-300 w-full relative pt-48 pl-96 bg-[url(/project05.png)] bg-cover bg-center text-white'>
        <div className='max-w-[640px]  '>
          <b className='text-7xl font-extrabold  '>e.Oliver</b>
          <p className='mt-5 leading-[29px] mb-5 text-base font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Breadcrums />
      <div className=' relative pt-28 pb-36 grid  bg-[url(/patternBg.png)] bg-cover bg-center grid-cols-3 mt-40'>
        <div className=' w-full h-full bg-gold opacity-75 absolute' />
        <div className='relative max-w-[190px] ml-auto col-span-1 '>
          <img className=' h-48 w-48 rounded-full' src={'/testimonial.png'} />
          <svg
            className='absolute top-0 right-0'
            xmlns='http://www.w3.org/2000/svg'
            width='45.228'
            height='42.484'
            viewBox='0 0 45.228 42.484'
          >
            <path
              id='Path_5'
              data-name='Path 5'
              d='M37.127,36.01q-4.142,0-7.4-3.939t-3.26-10.4q0-5.488,5.93-16.817T41.214-6.475a1.462,1.462,0,0,1,1.625,1.682,70.48,70.48,0,0,1-3.385,7.346q-3.385,6.9-3.385,10.8,0,3.009,3.833,4.912t5.111,3.983a8.389,8.389,0,0,1,1.278,4.47,9.052,9.052,0,0,1-2.556,6.815A9.1,9.1,0,0,1,37.127,36.01Zm-25.4,0q-4.142,0-7.4-3.939t-3.26-10.4q0-5.488,5.93-16.817T15.812-6.475a1.462,1.462,0,0,1,1.625,1.682,70.48,70.48,0,0,1-3.385,7.346q-3.385,6.9-3.385,10.8,0,3.009,3.833,4.912t5.111,3.983a8.389,8.389,0,0,1,1.278,4.47,9.052,9.052,0,0,1-2.556,6.815A9.1,9.1,0,0,1,11.725,36.01Z'
              transform='translate(-1.063 6.475)'
              fill='#202020'
            />
          </svg>
          <div className='flex justify-center'>
            {testimonials.map((_, index) => (
              <div key={index} className=' h-1 w-3 bg-white mr-3' />
            ))}
          </div>
        </div>
        <div className='col-span-2 max-w-3xl ml-14 z-0'>
          <p className=' italic text-xl font-semibold leading-9 tracking-wider'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className=' flex mt-11'>
            <img className=' h-24 w-40' src={'/signature.png'} alt='' />
            <div className=' ml-11 leading-7 tracking-wider'>
              <h1 className=' font-extrabold text-xl '>Liysa David</h1>
              <span className=' text-base font-medium text-gray-600'>
                Marketing Head, BlackPods Officialtm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
