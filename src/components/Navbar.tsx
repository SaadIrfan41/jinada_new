'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname()
  const [isopen, setisopen] = useState(false)
  useEffect(() => {
    isopen === false
      ? overflowBody()
      : (document.body.style.overflow = 'hidden')
  }, [isopen])

  const top = {
    animate: {
      rotate: isopen ? 45 : 0,
      y: isopen ? 10 : 0,

      transition: {
        duration: 0.8,
      },
    },
  }
  const bottom = {
    animate: {
      rotate: isopen ? -45 : 0,
      y: isopen ? -6 : 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const overflowBody = () => {
    setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 1000)
  }
  return (
    <div className={`${path === '/' && 'hidden'} overflow-hidden`}>
      <div className='absolute top-[55px] left-[60px]  z-20 cursor-pointer'>
        <Link href={'/'}>
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='34.414'
            height='31.737'
            viewBox='0 0 34.414 31.737'
          >
            <g id='Group_3' data-name='Group 3' transform='translate(0)'>
              <g id='Group_1' data-name='Group 1' transform='translate(0 0)'>
                <path
                  id='Path_1'
                  data-name='Path 1'
                  d='M824.79,244.67c-.04.291-.1.577-.16.861a6.657,6.657,0,0,1-.934,2.375,3.288,3.288,0,0,1-3.424,1.505,4.823,4.823,0,0,1-3.625-2.641,2.154,2.154,0,0,1,.935-2.994,6.653,6.653,0,0,1,2.53-.819c.323-.049.648-.081,1.009-.126-.083-.032-.128-.05-.173-.066a9.1,9.1,0,0,0-4.51-.4,11.383,11.383,0,0,0-3.355,1.118.223.223,0,0,1-.249-.008,8.494,8.494,0,0,0-1.438-.642c-.122-.042-.141-.024-.149.086-.014.193-.041.384-.065.576-.063.51-.128,1.02-.19,1.53a.116.116,0,0,0,.086.151,5.821,5.821,0,0,1,2.049,1.37h0c.032.043.061.087.1.127a5.02,5.02,0,0,1,1.278,3.338,6.519,6.519,0,0,1-.168,1.3c-.044.032-.04.077-.039.121h0c-.087.215-.164.434-.267.642-.056.113-.021.16.072.226.538.379,1.071.765,1.607,1.146.134.1.274.184.411.276q.136-.2.271-.4a.1.1,0,0,0,.007-.039c.069-.03.1-.095.141-.145a2.562,2.562,0,0,1,1.675-.943,2.746,2.746,0,0,1,2.324.87A4.06,4.06,0,0,1,821.705,256a6.891,6.891,0,0,1-1.039,3.58,16.392,16.392,0,0,1-4.43,4.726c-.34.259-.693.5-1.063.772a15.925,15.925,0,0,0,9.658-8.857A14.74,14.74,0,0,0,824.79,244.67Z'
                  transform='translate(-791.576 -233.796)'
                  fill='#000000'
                />
                <path
                  id='Path_2'
                  data-name='Path 2'
                  d='M465.478,37.161a3.622,3.622,0,0,1,2.67.845,3.545,3.545,0,0,1,1.088,2.869A5.7,5.7,0,0,1,469,42.231a.085.085,0,0,0-.035.083,5.472,5.472,0,0,1-.47.913,2.517,2.517,0,0,1-3.081,1.088,5.418,5.418,0,0,1-2.059-1.459,13.112,13.112,0,0,1-.928-1.114c.027.1.043.145.05.189a7.353,7.353,0,0,0,1.035,2.747,9.888,9.888,0,0,0,3.545,3.291.225.225,0,0,1,.132.236,6.4,6.4,0,0,0,.151,1.583c.743-.3,1.476-.6,2.212-.891.1-.04.1-.1.083-.177a6.355,6.355,0,0,1-.029-1.142.113.113,0,0,0,.011-.055l.147-.717a7.573,7.573,0,0,1,.352-.96l.306-.517h0a6.271,6.271,0,0,1,1.23-1.286,6.1,6.1,0,0,1,1.979-.973.083.083,0,0,0,.093-.031,7.942,7.942,0,0,1,.882-.129c.111,0,.091-.075.1-.14.109-.79.221-1.581.334-2.386a4.878,4.878,0,0,1-.757-.037,2.693,2.693,0,0,1-1.4-.569,2.251,2.251,0,0,1-.72-2.482,4.179,4.179,0,0,1,2.22-2.589,9.229,9.229,0,0,1,5.257-.893,17.455,17.455,0,0,1,2.571.419l.421.1a1.1,1.1,0,0,0,.393.105.678.678,0,0,0,.266.079l1.154.365a.957.957,0,0,0,.3.117.887.887,0,0,0,.3.1.283.283,0,0,0,.171.072l.8.329a4.531,4.531,0,0,0-.7-.536.577.577,0,0,0-.225-.15,1.3,1.3,0,0,0-.3-.2,10.9,10.9,0,0,0-1.247-.718l-.331-.173-.485-.228a12.128,12.128,0,0,0-1.44-.591,17.129,17.129,0,0,0-5.492-.983,17.594,17.594,0,0,0-2.5.129,2.572,2.572,0,0,0-.439.068,11.734,11.734,0,0,0-1.459.272,17.112,17.112,0,0,0-8.373,4.715c-.248.251-.479.517-.745.806a.832.832,0,0,0,.107-.019A9.092,9.092,0,0,1,465.478,37.161Z'
                  transform='translate(-457.821 -31.906)'
                  fill='#000000'
                />
                <path
                  id='Path_3'
                  data-name='Path 3'
                  d='M381.186,380.731q-.936-.645-1.868-1.295c-.049-.034-.075-.055-.137-.009a6.121,6.121,0,0,1-1.968.922c-.05-.007-.1-.014-.134.033a1.285,1.285,0,0,0-.149.014,5.7,5.7,0,0,1-2.455-.036,5.53,5.53,0,0,1-3.181-1.983c-.07-.087-.115-.1-.222-.052-.4.167-.811.318-1.217.477l-1.145.45a2.874,2.874,0,0,1,.561,1.445A2.164,2.164,0,0,1,367.9,382.9a4.275,4.275,0,0,1-3.621-.053,7.051,7.051,0,0,1-3.009-2.5,13.8,13.8,0,0,1-2.158-5.12c-.093-.408-.173-.818-.258-1.227l-.141-1.214a3.509,3.509,0,0,0-.157.973,3.158,3.158,0,0,0-.082.746,14.316,14.316,0,0,0,.212,3.547,11.99,11.99,0,0,0,.6,2.212c-.006.036-.012.072.028.1a.985.985,0,0,0,.026.1,15.688,15.688,0,0,0,6.487,7.852,12.13,12.13,0,0,0,1.861,1,.034.034,0,0,0,.046.03,17.933,17.933,0,0,0,5.083,1.5,6.9,6.9,0,0,1-2.9-3.5c.037-.166-.047-.322-.047-.485a2.747,2.747,0,0,1,.289-1.354,4.36,4.36,0,0,1,2.551-2.057,4.952,4.952,0,0,1,2.572-.238.074.074,0,0,0,.087.026,3.1,3.1,0,0,1,.828.356,2.245,2.245,0,0,1,1.011,1.891,5.927,5.927,0,0,1-.568,2.537c-.1.24-.214.474-.339.751a8.094,8.094,0,0,0,2.712-3.411,9.6,9.6,0,0,0,.711-3.407.251.251,0,0,1,.166-.242,7.808,7.808,0,0,0,1.243-.8C381.168,380.87,381.335,380.833,381.186,380.731Z'
                  transform='translate(-358.442 -359.094)'
                  fill='#000000'
                />
              </g>
              <ellipse
                id='Ellipse_1'
                data-name='Ellipse 1'
                cx='3.56'
                cy='3.333'
                rx='3.56'
                ry='3.333'
                transform='translate(13.794 12.855)'
                fill='#000000'
              />
            </g>
          </svg>
        </Link>
      </div>
      <button
        onClick={() => {
          setisopen(!isopen)
        }}
        className='absolute top-[55px] right-16  z-20 '
      >
        <motion.div
          variants={top}
          animate='animate'
          className=' h-1 w-10 bg-black '
        />
        <motion.div
          variants={bottom}
          animate='animate'
          className=' h-1 w-10 bg-black mt-3'
        />

        {/* <svg
          className=' overflow-visible'
          viewBox='0 0 100 60'
          width='40'
          height='30'
        >
          <motion.rect
            variants={top}
            animate='animate'
            width='100'
            height='10'
            //   fill={carouselData[carouselIndex].headerColor}
          />

          <motion.rect
            variants={bottom}
            animate='animate'
            y='50'
            width='100'
            height='10'
            //   fill={carouselData[carouselIndex].headerColor}
          />
        </svg> */}
      </button>

      <AnimatePresence>
        {isopen && (
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            exit={{
              y: 1000,
              transition: {
                ease: 'easeInOut',
                duration: 1,
              },
            }}
            className='  text-#4D4D4D fixed z-10 grid h-full  overflow-hidden  min-h-screen min-w-full  place-content-center gap-y-5  bg-white  text-center text-6xl font-extrabold'
          >
            <Link
              onClick={() => {
                setisopen(!isopen)
                isopen
                  ? overflowBody()
                  : (document.body.style.overflow = 'hidden')
              }}
              className='relative z-10 text-gray-900 transition-all duration-1000 before:h-1 before:w-screen before:scale-y-[1] before:transition-all before:duration-500  hover:w-screen before:hover:absolute before:hover:inset-y-10 before:hover:inset-x-0  before:hover:scale-y-[8] before:hover:bg-gold'
              href='/'
            >
              <span className='relative '>HOME</span>
            </Link>
            <Link
              onClick={() => {
                setisopen(!isopen)
                isopen
                  ? overflowBody()
                  : (document.body.style.overflow = 'hidden')
              }}
              className='relative z-10 text-gray-900 transition-all duration-500 before:h-1 before:w-screen before:scale-y-[1] before:transition-all before:duration-500 hover:w-screen  before:hover:absolute before:hover:inset-y-10 before:hover:inset-x-0 before:hover:scale-y-[8]  before:hover:bg-gold'
              href='/projects'
            >
              <span className='relative '>PROJECTS</span>
            </Link>
            <Link
              onClick={() => {
                setisopen(!isopen)
                isopen
                  ? overflowBody()
                  : (document.body.style.overflow = 'hidden')
              }}
              className='relative z-10 text-gray-900 transition-all duration-500 before:h-1 before:w-screen before:scale-y-[1]  before:transition-all before:duration-500 hover:w-screen  before:hover:absolute before:hover:inset-y-10 before:hover:inset-x-0 before:hover:scale-y-[8]  before:hover:bg-gold'
              href='/studio'
            >
              <span className='relative '>STUDIO</span>
            </Link>

            <Link
              onClick={() => {
                setisopen(!isopen)
                isopen
                  ? overflowBody()
                  : (document.body.style.overflow = 'hidden')
              }}
              className='relative z-10 text-gray-900 transition-all duration-500 before:h-1 before:w-screen before:scale-y-[1]  before:transition-all before:duration-500 hover:w-screen  before:hover:absolute before:hover:inset-y-10 before:hover:inset-x-0 before:hover:scale-y-[8]  before:hover:bg-gold'
              href='/contact'
            >
              <span className='relative '>CONTACT</span>
            </Link>

            <div className='grid grid-cols-1'>
              <Image
                className=' absolute bottom-0  right-0  '
                src='/image04.png'
                loading='lazy'
                width={700}
                height={100}
                // fill={true}
                // style={{ objectFit: 'contain' }}
                // width={866}
                // height={100}
                // blurDataURL='/image01.png'
                // placeholder='blur'
                // quality={100}
                alt='Picture of the HAND'
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default Navbar
