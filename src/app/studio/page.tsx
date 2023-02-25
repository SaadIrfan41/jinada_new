import Breadcrums from '@/components/Breadcrums'
import Footer from '@/components/Footer'
import { PaperAirplaneSvg } from '@/components/Svgs'
import Image from 'next/image'
import React from 'react'

const servicesdata = [
  {
    name: 'Website Development',
    description:
      'WOW your site visitor under 3 seconds. Make your website best by analyzing, planning, and implementing the best practices.',
    image: '/web.png',
    id: 'service1',
  },
  {
    name: 'Social Media Growth',
    description:
      '2020 requires unprecedented social media growth and management strategies. Luckily, we got the perfect blend for you.',
    image: '/SocialMedia.png',
    id: 'service2',
  },
  {
    name: 'Paid Media Services',
    description:
      'Whether it’s selling a product or generating thousands of leads for your business, we make every penny count.',
    image: '/PaidMedia.png',
    id: 'service3',
  },
  {
    name: 'SEO Services',
    description:
      'Online presence is a must for your business growth. Make your brand appear on the top of the ladder and let your best audience reach you.',
    image: '/seo.png',
    id: 'service4',
  },
  {
    name: 'Content Writing',
    description:
      'Web content, Blogs, Articles, or Ads copy, we got it all covered. Increase your SEO efforts with SEO content writing we provide.',
    image: '/ContenWtriting.png',
    id: 'service5',
  },
  {
    name: 'Messenger & Sms',
    description:
      'Something with an open ration of 80% and CTR over 40% can do miracles for your website. Don’t miss these two game-changers.',
    image: '/messenger.png',
    id: 'service6',
  },
  {
    name: 'Store Management',
    description:
      'Let us manage it all for you — a combined package of develop, market, and management, including fulfillment and customer support.',
    image: '/storeManagment.png',
    id: 'service7',
  },
  {
    name: 'Email Marketing',
    description:
      'Get optimized and effective email strategies to retain customers and recover lost revenue. Generate leads, nurture & convert.',
    image: '/emailMarketing.png',
    id: 'service8',
  },
]

const page = () => {
  return (
    <div>
      <div className='  w-full relative pt-48 pl-10 pb-16 xl:pb-48 lg:pl-20  xl:pt-48  2xl:pl-96'>
        <Image
          priority
          src={'/studio.png'}
          fill={true}
          className='  object-cover -z-10  '
          alt=''
        />
        <div className=' max-w-xs md:max-w-md xl:max-w-2xl'>
          <b className=' font-extrabold text-5xl md:text-6xl lg:text-7xl '>
            Studio.
          </b>
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
      {/* Main Heading Section */}
      <div className='max-w-xl mx-auto relative max-h-44 py-14 xl:pl-20  grid place-items-center mt-14'>
        <h1 className=' font-bold grid place-content-center text-[100px] sm:text-7xl md:text-8xl mx-auto absolute inset-0 ml-auto text-[#F2F2F2] xl:pl-20 '>
          work
        </h1>
        <div className='z-0 mt-5 sm:mt-2 w-full'>
          <h2 className='z-0 md:text-5xl  text-4xl text-center font-extrabold  '>
            Our Studio
          </h2>
          <p className='z-0 text-center text-base'>Around Our Agency</p>
        </div>
      </div>

      {/* Services Section */}

      <div className='grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-20 transition-all gap-7  place-content-center xl:mx-10 2xl:mx-60 '>
        {servicesdata.map(({ image, id, description, name }) => (
          <div
            key={id}
            className='hover:grayscale-0 grayscale pb-12 hover:shadow-xl mx-auto rounded-lg text-center duration-300 max-w-xs'
          >
            <Image
              priority
              src={image}
              width={128}
              height={128}
              className=' mx-auto '
              alt=''
            />
            <h1 className='text-lg font-bold mt-6 mb-7'>{name}</h1>
            <p className=' font-normal text-sm px-4 pb-2 '>{description}</p>
          </div>
        ))}
      </div>
      {/* Offering Solutions Section */}
      <div className=' grid grid-cols-1 xl:grid-cols-2  gap-14 mb-32'>
        <div className='col-span-1 xl:mr-0 mx-auto  mt-28 relative '>
          <Image
            width={673}
            height={534}
            priority
            src='/person.png'
            // className=' w-[43.75rem] h-[28.75rem] '
            alt=''
          />
          <Image
            width={20}
            height={9}
            src='/particle-2.png'
            className='absolute top-0 left-24'
            alt=''
          />
          <Image
            width={43}
            height={33}
            src='/particle-4.png'
            className='absolute top-28 md:left-[-90px]'
            alt=''
          />
          <Image
            width={30}
            height={33}
            src='/particle-3.png'
            className='absolute bottom-10 md:left-[-100px]'
            alt=''
          />
          <Image
            width={30}
            height={33}
            src='/particle-1.png'
            className='absolute bottom-[-10px] left-24'
            alt=''
          />
          <Image
            width={50}
            height={33}
            src='/particle-5.png'
            className='absolute bottom-[-70px] left-64'
            alt=''
          />
        </div>
        <div className=' col-span-1 md:mt-36 row-span-full xl:row-auto mt-auto'>
          <div className='  relative  grid xl:place-content-start place-content-center  pl-5 md:pt-10   mt-14'>
            <Image
              width={50}
              height={33}
              src='/particle-7.png'
              className='absolute md:top-0 lg:right-40 top-[-50px] right-0'
              alt=''
            />
            <Image
              width={40}
              height={33}
              src='/particle-3.png'
              className='absolute bottom-[-50px] right-40'
              alt=''
            />
            <div className='w-full'>
              <h1
                style={{ zIndex: -1 }}
                className=' font-bold text-[80px] w-full sm:text-7xl text-center xl:text-start mx-auto md:text-[7rem] top-[-50px] absolute md:top-0 left-0 text-[#F2F2F2]  '
              >
                what we do
              </h1>

              <h2 className='z-10 md:text-5xl text-4xl  max-w-xl  lg:text-start text-center font-extrabold'>
                Offering Bespoke Solutions
              </h2>
            </div>
            <p className=' font-medium text-base relative  max-w-lg mt-8 leading-7'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud.
              <Image
                width={30}
                height={33}
                src='/particle-6.png'
                className='absolute top-2 left-[-40px]'
                alt=''
              />
            </p>
          </div>
        </div>
      </div>
      {/* I Frame Video */}
      {/* <iframe
        className='w-full aspect-video max-h-[790px]'
        // width='560'
        // height='315'
        src='https://www.youtube.com/embed/1OdK8j9gr88'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      /> */}

      {/* Brands Section */}
      <div className='grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-20 transition-all gap-20  place-content-center xl:mx-10 2xl:mx-60'>
        <div className='m-auto'>
          {' '}
          <Image
            width={194}
            height={170}
            src='/brand01.png'
            className=''
            alt=''
          />
        </div>
        <div className='m-auto'>
          <Image
            width={194}
            height={170}
            src='/brand02.png'
            className=''
            alt=''
          />
        </div>
        <div className='m-auto'>
          <Image
            width={194}
            height={170}
            src='/brand03.png'
            className=''
            alt=''
          />
        </div>
        <div className='m-auto'>
          <Image
            width={194}
            height={170}
            src='/brand04.png'
            className=''
            alt=''
          />
        </div>
      </div>

      {/* NewsLetter Section */}
      <div className=' relative pt-28 pb-36   bg-[url(/patternBg.png)] grid bg-cover bg-center  mt-20'>
        <div className=' w-full h-full bg-gold opacity-75 absolute' />
        <h1 className=' md:text-[3rem] text-2xl font-extrabold w-full text-center z-0 mb-3 leading-10'>
          Sign Up To Our Newsletter
        </h1>
        <p className='md:text-lg text-md font-normal text-center z-0 leading-8'>
          To get the latest news from us please subscribe your email.
        </p>
        <div className='relative  bg-white max-w-7xl mx-auto mt-9 z-0'>
          <input
            placeholder='Subscribe to our Newsletter'
            className=' text-lg font-medium pr-20 lg:w-[684px] w-[400px] md:w-[500px] py-6 pl-9  '
          />
          <button className='absolute  inset-y-0 right-0 flex items-center pr-7'>
            <PaperAirplaneSvg />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page