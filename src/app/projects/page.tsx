/* eslint-disable @next/next/no-img-element */
import {
  FacebookSvg,
  FooterShuriken,
  InstagramSvg,
  LogoShuriken,
  TwitterSvg,
} from '@/components/Svgs'
import Image from 'next/image'
import React from 'react'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

const projectsData = [
  { image: '/project01.png', id: 'projectImage1' },
  { image: '/project02.png', id: 'projectImage2' },
  { image: '/project03.png', id: 'projectImage3' },
  { image: '/project04.png', id: 'projectImage4' },
  { image: '/project05.png', id: 'projectImage5' },
]
const testimonials = [
  { image: '/testimonial.png', id: 1 },
  { image: '/testimonial.png', id: 2 },
  { image: '/testimonial.png', id: 3 },
]

const page = () => {
  return (
    <div>
      <div className='h-[679px] bg-red-300 w-full relative pt-48 pl-80 bg-[url(/image05.png)] bg-cover bg-center'>
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
      <nav className='flex ' aria-label='Breadcrumb'>
        <ol
          role='list'
          className='flex w-screen max-w-6xl mt-[-30px] z-0  h-16 mx-auto space-x-4 rounded-md bg-white px-6 shadow'
        >
          <li className='flex'>
            <div className='flex items-center'>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25.456'
                  height='19.795'
                  viewBox='0 0 25.456 19.795'
                >
                  <path
                    id='Icon_awesome-home'
                    data-name='Icon awesome-home'
                    d='M12.389,7.389,4.242,14.1v7.242a.707.707,0,0,0,.707.707L9.9,22.036a.707.707,0,0,0,.7-.707V17.1a.707.707,0,0,1,.707-.707H14.14a.707.707,0,0,1,.707.707v4.226a.707.707,0,0,0,.707.709l4.95.014a.707.707,0,0,0,.707-.707V14.094L13.065,7.389A.539.539,0,0,0,12.389,7.389Zm12.87,4.561L21.565,8.9V2.784a.53.53,0,0,0-.53-.53H18.56a.53.53,0,0,0-.53.53V5.992L14.073,2.737a2.121,2.121,0,0,0-2.7,0L.191,11.95a.53.53,0,0,0-.071.747l1.127,1.37a.53.53,0,0,0,.747.072L12.389,5.577a.539.539,0,0,1,.676,0L23.46,14.139a.53.53,0,0,0,.747-.071l1.127-1.37a.53.53,0,0,0-.075-.748Z'
                    transform='translate(0.001 -2.254)'
                    fill='#8799a3'
                  />
                </svg>

                <span className='sr-only'>Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name} className='flex'>
              <div className='flex items-center'>
                <svg
                  className='h-full w-6 flex-shrink-0 text-gray-200'
                  viewBox='0 0 24 44'
                  preserveAspectRatio='none'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
                </svg>
                <a
                  href={page.href}
                  className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
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
        <img src={projectsData[0].image} className=' ml-auto  ' alt='' />

        <img src={projectsData[1].image} className=' row-span-2' alt='' />
        <img
          src={projectsData[2].image}
          className=' ml-auto row-span-2 '
          alt=''
        />
        <img src={projectsData[3].image} className='  ' alt='' />
        <img
          src={projectsData[4].image}
          className=' col-span-2 mx-auto mt-[-50px] '
          alt=''
        />
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

      {/* <footer className='grid relative  overflow-hidden bg-gray-800'>
        <div className='absolute left-[-6.25rem] top-[-1.875rem]'>
          <FooterShuriken />
        </div>
        <div className='  py-24 text-center '>
          <div className='flex justify-center'>
            <LogoShuriken />
          </div>
          <p className=' mt-16 text-lg text-gray-400 font-normal leading-8 max-w-xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud.
          </p>
          <div className='flex mt-9 justify-center '>
            <div className=' pr-9'>
              <FacebookSvg />
            </div>
            <div className=' pr-7'>
              <TwitterSvg />
            </div>

            <InstagramSvg />
          </div>
        </div>
        <p className='bg-gray-900 text-center text-lg font-normal text-gray-400 py-9'>
          © All right reserved 2020. Jinada - Ecom Agency.
        </p>
      </footer> */}
      {/* <div className='grid  grid-col-2   justify-center  gap-7 mt-12 '>
        {projectsData.map((project, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={`${
              project.id === 'projectImage1'
                ? ''
                : project.id === 'projectImage2'
                ? ' '
                : project.id === 'projectImage3'
                ? ' mt-[-115px]  '
                : project.id === 'projectImage4'
                ? ''
                : 'col-span-2 w-full max-w-[1170px] mx-auto mt-[-50px] max-h-[596px]'
            }`}
            // className={`${
            //   project.id === 'projectImage2' || 'projectImage3'
            //     ? ' h-[650px] w-[570px]'
            //     : 'h-[534px] w-[570px]'
            // } ${
            //   project.id === 'projectImage5'
            //     ? 'max-w-[1170px]'
            //     : 'max-w-[570px]'
            // }`}
            key={project.id}
            src={project.image}
            // src={'/project01.png'}
            // width={500}
            // height={500}
            // width={index + 1 === 5 ? '1170' : '570'}
            // height={index === 1 || 2 ? '650' : '534'}
            alt='Project Images'
          />
        ))}
          </div> */}
    </div>
  )
}

export default page
