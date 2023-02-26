import Breadcrums from '@/components/Breadcrums'
import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'

const contact = () => {
  return (
    <div>
      <div className='  w-full relative pt-48 pl-10 md:pl-28 pb-16 xl:pb-48   xl:pt-48  2xl:pl-96'>
        <Image
          priority
          src={'/contactus.png'}
          fill={true}
          className='  object-cover -z-10  '
          alt=''
        />
        <div className=' max-w-sm md:max-w-3xl xl:max-w-3xl'>
          <b className=' font-extrabold text-5xl md:text-6xl lg:text-7xl '>
            Contact Us
          </b>
          <p className='mt-5 leading-[29px] mb-5 text-base font-medium'>
            We work with friends and clients all over the world
          </p>
        </div>
      </div>
      <Breadcrums />
      {/* Main Heading */}
      <div className='max-w-xl mx-auto relative max-h-44 py-14 xl:pl-20  grid place-items-center mt-14'>
        <h1 className=' font-bold grid place-content-center text-[100px] sm:text-7xl md:text-8xl mx-auto absolute inset-0 ml-auto text-[#F2F2F2] xl:pl-20 '>
          where
        </h1>

        <h2 className='z-0 md:text-5xl  mt-5 sm:mt-2 w-full  text-4xl text-center font-extrabold  '>
          Contact Us
        </h2>
      </div>

      <div className='grid xl:grid-cols-3 grid-cols-1 xl:ml-[20rem] mt-20'>
        <div className='  max-w-sm mx-auto text-center lg:text-start '>
          <h2 className=' text-3xl font-bold'>Get In Touch</h2>
          <p className=' font-normal text-md mt-4'>
            If You Are Interested In Working With Us, Please Get In Touch.
          </p>
        </div>
        <div className='  col-span-2 '>
          <h2 className=' text-3xl text-center xl:text-start md:ml-5 xl:mt-0 mt-10 font-bold'>
            Feedback
          </h2>
          <form className=' mt-9 flex flex-col mx-5 md:grid grid-cols-3 gap-7 xl:pr-44 mb-56'>
            <input
              className='  py-6 pl-9 bg-gray-100 col-span-1'
              placeholder='Name'
            />
            <input
              className=' py-6 pl-9 bg-gray-100 col-span-1'
              placeholder='Email'
            />
            <input
              className=' py-6 pl-9 bg-gray-100 col-span-1'
              placeholder='Subject'
            />
            <textarea
              className=' py-6 pl-9 bg-gray-100 col-span-3 min-h-[258px]'
              placeholder='Your Message'
            />
            <button className=' min-w-[251px]  text-center text-base mt-8 bg-gold py-5 px-16 text-white'>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contact
