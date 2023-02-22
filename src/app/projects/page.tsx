/* eslint-disable @next/next/no-img-element */
import Breadcrums from '@/components/Breadcrums'
import Link from 'next/link'
import React from 'react'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

const projectsData = [
  { name: 'Astra Digitals', image: '/project01.png', id: 'projectImage1' },
  { name: 'Blackpods Official', image: '/project02.png', id: 'projectImage2' },
  { name: 'Lorem ipsum', image: '/project03.png', id: 'projectImage3' },
  { name: 'TrendUX', image: '/project04.png', id: 'projectImage4' },
  { name: 'e.Oliver', image: '/project05.png', id: 'projectImage5' },
]
const testimonials = [
  { image: '/testimonial.png', id: 1 },
  { image: '/testimonial.png', id: 2 },
  { image: '/testimonial.png', id: 3 },
]

const page = () => {
  return (
    <div>
      <div className='h-[679px] bg-red-300 w-full relative pt-48 pl-96 bg-[url(/image05.png)] bg-cover bg-center'>
        <div className='max-w-[640px]  '>
          <b className='text-7xl font-extrabold  '>Projects.</b>
          <p className='mt-5 leading-[29px] mb-5 text-base font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className='flex items-center pl-5 pr-7 text-base py-3 border border-black'>
            <span className='mr-5'>Hire Us</span>
            <svg
              className=''
              xmlns='http://www.w3.org/2000/svg'
              width='5.976'
              height='10.453'
              viewBox='0 0 5.976 10.453'
            >
              <path
                id='Icon_ionic-ios-arrow-back'
                data-name='Icon ionic-ios-arrow-back'
                d='M15.425,11.419,11.47,7.467a.747.747,0,0,1,1.058-1.055l4.481,4.478a.746.746,0,0,1,.022,1.03l-4.5,4.509a.747.747,0,1,1-1.058-1.055Z'
                transform='translate(-11.251 -6.194)'
                fill='#202020'
              />
            </svg>
          </button>
        </div>
      </div>
      <Breadcrums />
      <div className=' w-screen max-w-xl mx-auto relative max-h-44 py-14 pl-20  grid place-items-center mt-14'>
        <h1 className=' font-bold text-8xl absolute top-0 left-0 text-[#F2F2F2] '>
          projects
        </h1>
        <h2 className='z-0 text-5xl text-center font-extrabold'>
          Great Portfolio
        </h2>
        <p className='z-0 text-center text-base'>Around Our Agency</p>
      </div>

      <div className='grid  grid-cols-2 gap-7 mt-12'>
        <Link href={`/projects/${projectsData[0].name}`}>
          <img src={projectsData[0].image} className=' ml-auto  ' alt='' />
        </Link>
        <Link
          href={`/projects/${projectsData[1].name}`}
          className=' row-span-2'
        >
          <img src={projectsData[1].image} alt='' />
        </Link>
        <Link
          href={`/projects/${projectsData[2].name}`}
          className=' ml-auto row-span-2 '
        >
          <img src={projectsData[2].image} alt='' />
        </Link>

        <Link href={`/projects/${projectsData[3].name}`}>
          <img src={projectsData[3].image} alt='' />
        </Link>
        <Link
          href={`/projects/${projectsData[4].name}`}
          className=' col-span-2 mx-auto mt-[-50px] '
        >
          <img src={projectsData[4].image} alt='' />
        </Link>
      </div>

      <div className='grid place-items-center mb-14'>
        <button className=' px-16 text-base py-3 border border-gold text-gold  text-center  mx-auto '>
          View More
        </button>
      </div>
      <div className=' relative pt-28 pb-36 grid  bg-[url(/patternBg.png)] bg-cover bg-center grid-cols-3'>
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

export default page
