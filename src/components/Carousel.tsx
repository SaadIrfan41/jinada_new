/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
// import Navbar from '../Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { carouselInterface, carouselDataType } from '@/app/Fetch_Carousel_Data'
import Image from 'next/image'

// type AnimatedWordsProps = {
//   text: string
// }

// const AnimatedWords = ({ text }: AnimatedWordsProps) => {
//   return (
//     <motion.span
//       className='block overflow-hidden'
//       initial={{ y: 100 }}
//       animate={{
//         y: 0,
//         transition: {
//           ease: [0.6, 0.01, 0.05, 0.95],
//           duration: 1,
//         },
//       }}
//     >
//       {text}
//     </motion.span>
//   )
// }

const Carousel = ({ carouselData }: carouselInterface) => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isopen, setisopen] = useState(false)
  // const [index, setIndex] = useState()

  const handelClickForward = () => {
    if (carouselIndex >= carouselData.length - 1) {
      return setCarouselIndex(0)
    }
    setCarouselIndex(carouselIndex + 1)
  }
  const handelClickBackward = () => {
    if (carouselIndex <= 0) {
      return setCarouselIndex(carouselData.length - 1)
    }
    setCarouselIndex(carouselIndex - 1)
  }
  const top = {
    animate: {
      rotate: isopen ? 45 : 0,
      y: isopen ? 30 : 0,

      transition: {
        duration: 0.8,
      },
    },
  }
  const bottom = {
    animate: {
      rotate: isopen ? -45 : 0,
      y: isopen ? -20 : 0,
      transition: {
        duration: 0.8,
      },
    },
  }
  const variants = {
    initial: { y: 150 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
      },
    },
    exit: {
      y: 150,
      transition: {
        // ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.2,
      },
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselIndex >= carouselData.length - 1) {
        return setCarouselIndex(0)
      }
      setCarouselIndex(carouselIndex + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselIndex, carouselData.length])

  return (
    <div
      className={`${carouselData[carouselIndex].backgroundColor}  ${carouselData[carouselIndex].textColor} relative grid  h-screen grid-cols-2 overflow-hidden pl-5 text-base    lg:pl-16 `}
    >
      <div className='absolute top-[55px] left-[60px]  z-20 cursor-pointer'>
        <Link href={'/'}>
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='140'
            height='30'
            viewBox='0 0 140 30'
          >
            <path
              id='Union_1'
              data-name='Union 1'
              d='M9.292,1200.238a.034.034,0,0,1-.046-.03,12.081,12.081,0,0,1-1.861-1A15.689,15.689,0,0,1,.9,1191.359a.869.869,0,0,1-.026-.1c-.041-.023-.033-.059-.028-.1a11.981,11.981,0,0,1-.6-2.212,14.315,14.315,0,0,1-.213-3.546,3.228,3.228,0,0,1,.083-.746,3.532,3.532,0,0,1,.157-.972L.41,1184.9c.085.409.165.819.257,1.227a13.813,13.813,0,0,0,2.159,5.12,7.048,7.048,0,0,0,3.008,2.5,4.274,4.274,0,0,0,3.621.053,2.162,2.162,0,0,0,1.374-2.206,2.854,2.854,0,0,0-.561-1.445l1.145-.45c.406-.159.816-.311,1.217-.477.106-.045.152-.036.223.052a5.526,5.526,0,0,0,3.18,1.983,5.7,5.7,0,0,0,2.455.035c.048-.01.1-.008.149-.013.035-.047.084-.04.134-.032a6.128,6.128,0,0,0,1.968-.922c.062-.046.088-.024.136.01q.932.65,1.868,1.295c.15.1-.017.14-.053.167a7.718,7.718,0,0,1-1.243.8.253.253,0,0,0-.166.243,9.61,9.61,0,0,1-.712,3.407,8.085,8.085,0,0,1-2.712,3.411c.126-.278.24-.513.339-.752a5.916,5.916,0,0,0,.568-2.537,2.246,2.246,0,0,0-1.011-1.892,3.115,3.115,0,0,0-.827-.356.073.073,0,0,1-.088-.026,4.955,4.955,0,0,0-2.571.238,4.365,4.365,0,0,0-2.551,2.058,2.74,2.74,0,0,0-.288,1.354c0,.163.084.319.047.485a6.891,6.891,0,0,0,2.9,3.5A17.921,17.921,0,0,1,9.292,1200.238Zm15.368.277a16.393,16.393,0,0,0,4.431-4.727,6.9,6.9,0,0,0,1.039-3.58,4.063,4.063,0,0,0-1.169-2.943,2.743,2.743,0,0,0-2.325-.869,2.556,2.556,0,0,0-1.674.942c-.045.05-.073.115-.141.146,0,.013,0,.029-.007.04-.089.133-.181.267-.271.4-.137-.091-.276-.181-.411-.276-.536-.381-1.07-.768-1.607-1.147-.093-.065-.128-.112-.072-.225.1-.208.178-.427.266-.643,0-.045,0-.089.038-.122a6.5,6.5,0,0,0,.168-1.3,5.017,5.017,0,0,0-1.278-3.338c-.035-.04-.064-.084-.1-.126a5.826,5.826,0,0,0-2.049-1.369.116.116,0,0,1-.087-.151c.062-.51.126-1.02.189-1.531.025-.191.052-.384.066-.576.007-.11.027-.128.149-.086a8.526,8.526,0,0,1,1.438.641.225.225,0,0,0,.249.008,11.4,11.4,0,0,1,3.355-1.118,9.087,9.087,0,0,1,4.51.4c.046.016.089.034.173.066-.36.044-.687.076-1.009.125a6.665,6.665,0,0,0-2.53.819,2.153,2.153,0,0,0-.935,2.994,4.822,4.822,0,0,0,3.625,2.641,3.289,3.289,0,0,0,3.424-1.505,6.652,6.652,0,0,0,.933-2.375c.061-.284.121-.57.161-.86a14.74,14.74,0,0,1,.04,11.556,15.925,15.925,0,0,1-9.657,8.858C23.967,1201.018,24.319,1200.774,24.66,1200.515Zm17.149-.91,1.316-3.465a3.174,3.174,0,0,0,1.618.41,1.429,1.429,0,0,0,1.124-.462,1.99,1.99,0,0,0,.411-1.36V1181.2h5.209v13.554a5.3,5.3,0,0,1-1.6,4.068,6.267,6.267,0,0,1-4.457,1.5A7.7,7.7,0,0,1,41.809,1199.605Zm103.015-5.185a7.281,7.281,0,0,1-3-2.568,6.892,6.892,0,0,1,0-7.418,7.222,7.222,0,0,1,2.988-2.555,10.724,10.724,0,0,1,8.651,0,7.139,7.139,0,0,1,2.988,2.541,6.99,6.99,0,0,1,0,7.432,7.188,7.188,0,0,1-2.988,2.568,10.552,10.552,0,0,1-8.637,0Zm2.056-8.7a3.252,3.252,0,0,0-.878,2.413,3.331,3.331,0,0,0,.878,2.451,3.3,3.3,0,0,0,4.5,0,3.331,3.331,0,0,0,.876-2.451,3.252,3.252,0,0,0-.876-2.413,3.331,3.331,0,0,0-4.5,0Zm-18.838,8.8a2.687,2.687,0,0,1-.9-2.079,2.659,2.659,0,0,1,.89-2.079,3.558,3.558,0,0,1,4.484,0,2.678,2.678,0,0,1,.878,2.079,2.705,2.705,0,0,1-.891,2.079,3.432,3.432,0,0,1-4.457,0Zm-14.12.256a4.352,4.352,0,0,1-1.906-1.527,3.853,3.853,0,0,1-.644-2.195,3.49,3.49,0,0,1,1.617-3.067,9.051,9.051,0,0,1,4.991-1.092h2.961q-.137-2.207-3.153-2.208a7.678,7.678,0,0,0-2.166.321,5.922,5.922,0,0,0-1.864.886L112,1182.586a10.087,10.087,0,0,1,3-1.194,15.182,15.182,0,0,1,3.552-.424,8.786,8.786,0,0,1,5.649,1.579,5.863,5.863,0,0,1,1.946,4.839v7.728H121.3v-1.8q-1.125,2.029-4.387,2.029A7.262,7.262,0,0,1,113.922,1194.779Zm2.494-3.928a1.214,1.214,0,0,0,.521,1.028,2.354,2.354,0,0,0,1.426.385,3.028,3.028,0,0,0,1.59-.412,2.308,2.308,0,0,0,.988-1.206v-1.207h-2.248Q116.417,1189.44,116.417,1190.851Zm-19.193,3.608a6.624,6.624,0,0,1-2.647-2.529,7.879,7.879,0,0,1,0-7.586,6.566,6.566,0,0,1,2.647-2.5,7.882,7.882,0,0,1,3.7-.873,5.594,5.594,0,0,1,4.112,1.438v-6.342h5.21v19.049h-4.963v-1.386a5.566,5.566,0,0,1-4.36,1.617A7.793,7.793,0,0,1,97.224,1194.459Zm2.549-8.741a3.252,3.252,0,0,0-.876,2.413,3.331,3.331,0,0,0,.876,2.451,3.029,3.029,0,0,0,2.249.886,3,3,0,0,0,2.221-.886,3.331,3.331,0,0,0,.878-2.451,3.28,3.28,0,0,0-.864-2.413,3,3,0,0,0-2.234-.874A3.053,3.053,0,0,0,99.773,1185.718Zm-19.687,9.061a4.355,4.355,0,0,1-1.905-1.527,3.854,3.854,0,0,1-.645-2.195,3.491,3.491,0,0,1,1.618-3.067,9.046,9.046,0,0,1,4.99-1.092H87.1q-.136-2.207-3.153-2.208a7.684,7.684,0,0,0-2.166.321,5.949,5.949,0,0,0-1.864.886l-1.754-3.312a10.074,10.074,0,0,1,3-1.194,15.179,15.179,0,0,1,3.55-.424,8.781,8.781,0,0,1,5.649,1.579,5.86,5.86,0,0,1,1.947,4.839v7.728H87.461v-1.8q-1.123,2.029-4.386,2.029A7.264,7.264,0,0,1,80.086,1194.779Zm2.5-3.928a1.214,1.214,0,0,0,.521,1.028,2.35,2.35,0,0,0,1.425.385,3.029,3.029,0,0,0,1.591-.412,2.306,2.306,0,0,0,.987-1.206v-1.207H84.857Q82.582,1189.44,82.582,1190.851Zm51.877,4.262V1181.2h5.21v13.914Zm-63.174,0v-7.162q0-2.85-2.44-2.849a2.886,2.886,0,0,0-2.153.821,3.383,3.383,0,0,0-.808,2.464v6.727h-5.21V1181.2h4.964v1.515a5.931,5.931,0,0,1,2.083-1.3,7.483,7.483,0,0,1,2.632-.449,6.349,6.349,0,0,1,4.455,1.54,5.983,5.983,0,0,1,1.687,4.646v7.959Zm-17.823,0V1181.2h5.21v13.914Zm-39.668-8.925a3.453,3.453,0,0,1,3.56-3.333,3.34,3.34,0,1,1,0,6.666A3.452,3.452,0,0,1,13.793,1186.189Zm-4.427.111a.227.227,0,0,0-.132-.237,9.894,9.894,0,0,1-3.544-3.29,7.373,7.373,0,0,1-1.035-2.747c-.006-.045-.022-.088-.05-.189a13.221,13.221,0,0,0,.928,1.114,5.415,5.415,0,0,0,2.059,1.458,2.516,2.516,0,0,0,3.081-1.088,5.57,5.57,0,0,0,.47-.913.083.083,0,0,1,.035-.083,5.744,5.744,0,0,0,.236-1.355,3.549,3.549,0,0,0-1.088-2.869,3.624,3.624,0,0,0-2.67-.846,9.091,9.091,0,0,0-3.1.72.7.7,0,0,1-.106.018c.266-.289.5-.555.745-.806a17.117,17.117,0,0,1,8.372-4.715,12,12,0,0,1,1.46-.273,2.679,2.679,0,0,1,.439-.067,17.65,17.65,0,0,1,2.5-.13,17.151,17.151,0,0,1,5.491.983,11.96,11.96,0,0,1,1.44.592l.485.227.331.173a10.822,10.822,0,0,1,1.247.718,1.3,1.3,0,0,1,.3.2.591.591,0,0,1,.225.149,4.594,4.594,0,0,1,.7.537l-.8-.329a.279.279,0,0,1-.171-.072.876.876,0,0,1-.3-.1.968.968,0,0,1-.3-.117l-1.154-.365a.7.7,0,0,1-.266-.079,1.079,1.079,0,0,1-.392-.106l-.422-.1a17.484,17.484,0,0,0-2.571-.419,9.229,9.229,0,0,0-5.256.893,4.179,4.179,0,0,0-2.221,2.588,2.252,2.252,0,0,0,.72,2.483,2.691,2.691,0,0,0,1.4.568,4.9,4.9,0,0,0,.756.038c-.113.8-.224,1.594-.333,2.385-.01.065.011.14-.1.14a7.733,7.733,0,0,0-.881.129.084.084,0,0,1-.093.031,6.114,6.114,0,0,0-1.979.972,6.324,6.324,0,0,0-1.231,1.286c-.1.173-.2.345-.306.517a7.652,7.652,0,0,0-.352.96q-.072.357-.147.717a.106.106,0,0,1-.011.056,6.272,6.272,0,0,0,.03,1.141c.012.076.016.137-.084.177-.735.294-1.468.592-2.211.892A6.365,6.365,0,0,1,9.366,1186.3Zm125.394-7.385a2.385,2.385,0,0,1,0-3.7,3.443,3.443,0,0,1,2.3-.744,3.561,3.561,0,0,1,2.3.705,2.22,2.22,0,0,1,.878,1.81,2.419,2.419,0,0,1-.878,1.913,3.4,3.4,0,0,1-2.3.757A3.438,3.438,0,0,1,134.76,1178.914Zm-81,0a2.385,2.385,0,0,1,0-3.7,3.439,3.439,0,0,1,2.3-.744,3.565,3.565,0,0,1,2.3.705,2.223,2.223,0,0,1,.878,1.81,2.423,2.423,0,0,1-.878,1.913,3.908,3.908,0,0,1-4.606.012Zm-7.184,0a2.385,2.385,0,0,1,0-3.7,3.437,3.437,0,0,1,2.3-.744,3.565,3.565,0,0,1,2.3.705,2.223,2.223,0,0,1,.878,1.81,2.423,2.423,0,0,1-.878,1.913,3.908,3.908,0,0,1-4.606.012Z'
              transform='translate(0 -1170)'
              fill={carouselData[carouselIndex].headerColor}
            />
          </svg>
        </Link>
      </div>
      <button
        onClick={() => setisopen(!isopen)}
        className='absolute top-[55px] right-16  z-20 '
      >
        <svg
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
            fill={carouselData[carouselIndex].headerColor}
          />

          <motion.rect
            variants={bottom}
            animate='animate'
            y='50'
            width='100'
            height='10'
            fill={carouselData[carouselIndex].headerColor}
          />
        </svg>
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
            className=' text-#4D4D4D absolute z-10 grid h-full  min-h-screen min-w-full  place-content-center gap-y-5  bg-white  text-center text-6xl font-extrabold'
          >
            <Link
              className='relative z-10 text-gray-900 transition-all duration-1000 before:h-1 before:w-screen before:scale-y-[1] before:transition-all before:duration-500  hover:w-screen before:hover:absolute before:hover:inset-y-10 before:hover:inset-x-0  before:hover:scale-y-[8] before:hover:bg-gold'
              href='/'
            >
              <span className='relative '>HOME</span>
            </Link>
            <Link
              className='relative z-10 text-gray-900 transition-all duration-500 before:h-1 before:w-screen before:scale-y-[1] before:transition-all before:duration-500 hover:w-screen  before:hover:absolute before:hover:inset-y-10 before:hover:inset-x-0 before:hover:scale-y-[8]  before:hover:bg-gold'
              href='/'
            >
              <span className='relative '>PROJECTS</span>
            </Link>
            <Link
              className='relative z-10 text-gray-900 transition-all duration-500 before:h-1 before:w-screen before:scale-y-[1]  before:transition-all before:duration-500 hover:w-screen  before:hover:absolute before:hover:inset-y-10 before:hover:inset-x-0 before:hover:scale-y-[8]  before:hover:bg-gold'
              href='/'
            >
              <span className='relative '>STUDIO</span>
            </Link>

            <Link
              className='relative z-10 text-gray-900 transition-all duration-500 before:h-1 before:w-screen before:scale-y-[1]  before:transition-all before:duration-500 hover:w-screen  before:hover:absolute before:hover:inset-y-10 before:hover:inset-x-0 before:hover:scale-y-[8]  before:hover:bg-gold'
              href='/'
            >
              <span className='relative '>CONTACT</span>
            </Link>

            <div>
              <img
                className=' absolute bottom-0  right-0  lg:max-h-[807px] lg:max-w-[706px]'
                src='/image04.png'
                loading='eager'
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

      <div className=' h-screen pt-40 md:pt-60 xl:pt-80  '>
        <div className='  mb-2 font-semibold uppercase tracking-[3.58px]  inline-block overflow-hidden'>
          {/* <AnimatedWords text={carouselData[carouselIndex].firstLine} /> */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={carouselData[carouselIndex].firstLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              // transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              {carouselData[carouselIndex].firstLine}{' '}
            </motion.div>
          </AnimatePresence>
        </div>

        <b className=' text-xl capitalize leading-[29px] tracking-[-2.18px] lg:text-6xl lg:leading-[69px] block overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.p
              key={carouselData[carouselIndex].secondLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='  overflow-hidden '
            >
              {carouselData[carouselIndex].secondLine}
            </motion.p>

            <motion.p
              key={carouselData[carouselIndex].thirdLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className=' overflow-hidden '
            >
              {carouselData[carouselIndex].thirdLine}
            </motion.p>
          </AnimatePresence>
        </b>
        <div className=' tranc md:text-base mt-[14px] max-w-[560px] text-sm font-medium leading-[29px] overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={carouselData[carouselIndex].fourthLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              // transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div>{carouselData[carouselIndex].fourthLine}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className=' mt-10  flex items-center  font-semibold tracking-[-0.4px]  overflow-hidden '>
          <AnimatePresence mode='wait'>
            <motion.div
              key={carouselData[carouselIndex].fifthLine + carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              // transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div>{carouselData[carouselIndex].fifthLine}</div>
            </motion.div>

            <motion.div
              key={carouselIndex}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className={`ml-[11px] grid h-[47px]  w-[47px] place-items-center rounded-full ${carouselData[carouselIndex].ctaBackgroundColor}`}
            >
              <svg
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
                  fill={carouselData[carouselIndex].ctaArrowColor}
                />
              </svg>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className=' mt-10 flex overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.svg
              key={carouselIndex + 'facebook'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='mr-[38px]'
              xmlns='http://www.w3.org/2000/svg'
              width='9.379'
              height='17.512'
              viewBox='0 0 9.379 17.512'
            >
              <path
                id='Icon_awesome-facebook-f'
                data-name='Icon awesome-facebook-f'
                d='M10.374,9.851l.486-3.169H7.819V4.625A1.585,1.585,0,0,1,9.606,2.912h1.383V.214A16.859,16.859,0,0,0,8.535,0C6.03,0,4.393,1.518,4.393,4.266V6.681H1.609V9.851H4.393v7.662H7.819V9.851Z'
                transform='translate(-1.609)'
                fill={carouselData[carouselIndex].socialIconsColor}
              />
            </motion.svg>

            <motion.svg
              key={carouselIndex + 'twitter'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='mr-[38px]'
              xmlns='http://www.w3.org/2000/svg'
              width='21.562'
              height='17.512'
              viewBox='0 0 21.562 17.512'
            >
              <path
                id='Icon_awesome-twitter'
                data-name='Icon awesome-twitter'
                d='M19.345,7.745c.014.192.014.383.014.575A12.487,12.487,0,0,1,6.786,20.893,12.488,12.488,0,0,1,0,18.909a9.142,9.142,0,0,0,1.067.055,8.85,8.85,0,0,0,5.486-1.888,4.427,4.427,0,0,1-4.132-3.065,5.573,5.573,0,0,0,.835.068,4.674,4.674,0,0,0,1.163-.15A4.42,4.42,0,0,1,.876,9.592V9.537a4.45,4.45,0,0,0,2,.561A4.426,4.426,0,0,1,1.5,4.188a12.561,12.561,0,0,0,9.112,4.624A4.989,4.989,0,0,1,10.507,7.8a4.423,4.423,0,0,1,7.648-3.024,8.7,8.7,0,0,0,2.8-1.067,4.407,4.407,0,0,1-1.943,2.435,8.859,8.859,0,0,0,2.545-.684,9.5,9.5,0,0,1-2.216,2.285Z'
                transform='translate(0 -3.381)'
                fill={carouselData[carouselIndex].socialIconsColor}
              />
            </motion.svg>

            <motion.svg
              key={carouselIndex + 'instagram'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              xmlns='http://www.w3.org/2000/svg'
              width='18.877'
              height='18.873'
              viewBox='0 0 18.877 18.873'
            >
              <path
                id='Icon_awesome-instagram'
                data-name='Icon awesome-instagram'
                d='M9.435,6.835a4.839,4.839,0,1,0,4.839,4.839A4.831,4.831,0,0,0,9.435,6.835Zm0,7.985a3.146,3.146,0,1,1,3.146-3.146A3.152,3.152,0,0,1,9.435,14.82ZM15.6,6.637a1.129,1.129,0,1,1-1.129-1.129A1.126,1.126,0,0,1,15.6,6.637Zm3.2,1.145a5.585,5.585,0,0,0-1.524-3.954A5.622,5.622,0,0,0,13.327,2.3c-1.558-.088-6.229-.088-7.787,0a5.614,5.614,0,0,0-3.954,1.52A5.6,5.6,0,0,0,.061,7.779c-.088,1.558-.088,6.229,0,7.787A5.585,5.585,0,0,0,1.586,19.52,5.629,5.629,0,0,0,5.54,21.044c1.558.088,6.229.088,7.787,0a5.585,5.585,0,0,0,3.954-1.524,5.622,5.622,0,0,0,1.524-3.954c.088-1.558.088-6.224,0-7.782Zm-2.013,9.454A3.185,3.185,0,0,1,15,19.031c-1.242.493-4.19.379-5.563.379s-4.325.109-5.563-.379a3.185,3.185,0,0,1-1.794-1.794c-.493-1.242-.379-4.19-.379-5.563s-.109-4.325.379-5.563A3.185,3.185,0,0,1,3.872,4.317c1.242-.493,4.19-.379,5.563-.379S13.76,3.829,15,4.317a3.185,3.185,0,0,1,1.794,1.794c.493,1.242.379,4.19.379,5.563S17.285,16,16.793,17.237Z'
                transform='translate(0.005 -2.238)'
                fill={carouselData[carouselIndex].socialIconsColor}
              />
            </motion.svg>
          </AnimatePresence>
        </div>
      </div>
      <div className=' grid grid-cols-12 '>
        <div className='  col-span-12   lg:col-span-10'>
          <motion.div className=' overflow-hidden'>
            <motion.div
              initial={{ width: '0%' }}
              animate={{
                width: '100%',
                x: `-${carouselIndex * 100}%`,
              }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className=' flex h-screen relative'
            >
              {carouselData.map((data: carouselDataType) => (
                <Image
                  priority
                  width={800}
                  height={100}
                  // fill={true}
                  key={data.id}
                  className='   min-w-full  object-cover'
                  src={data.image}
                  alt='Carousel Image'
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className=' relative col-span-12  flex flex-col  items-end justify-center  lg:col-span-1 '>
          <div className='absolute bottom-0 left-0 right-0 flex  justify-around lg:relative lg:block'>
            {carouselData.map(({ id }, i) => (
              <div
                onClick={() => setCarouselIndex(i)}
                key={id}
                className={` h-1.5 w-1.5 cursor-pointer rounded-full ${
                  carouselIndex === i
                    ? carouselData[carouselIndex].paginationDotsColorActive
                    : carouselData[carouselIndex].paginationDotsColorNonActive
                }  mb-[35px] `}
              />
            ))}
          </div>
          <div className=' absolute bottom-[5%] hidden flex-col lg:right-[-33%] lg:flex xl:right-[-30%]'>
            <motion.div
              // animate={{
              //   borderWidth: ['1px', '5px', '9px'],
              //   transition: {
              //     ease: 'easeIn',
              //     duration: 3,
              //     repeat: Infinity,
              //   },
              // }}
              onClick={() => handelClickForward()}
              className='ml-[11px] mb-[21px] grid h-[47px] w-[47px] cursor-pointer place-items-center rounded-full border border-gray-600'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='5.976'
                height='10.453'
                viewBox='0 0 5.976 10.453'
              >
                <path
                  style={{ width: '75%', borderWidth: '60%' }}
                  id='Icon_ionic-ios-arrow-back'
                  data-name='Icon ionic-ios-arrow-back'
                  d='M15.425,11.419,11.47,7.467a.747.747,0,0,1,1.058-1.055l4.481,4.478a.746.746,0,0,1,.022,1.03l-4.5,4.509a.747.747,0,1,1-1.058-1.055Z'
                  transform='translate(-11.251 -6.194)'
                  fill='#4d4d4d'
                />
              </svg>
            </motion.div>
            <div
              onClick={() => handelClickBackward()}
              className='ml-[11px] grid h-[47px] w-[47px] cursor-pointer place-items-center  rounded-full border border-gray-600'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='5.976'
                height='10.453'
                viewBox='0 0 5.976 10.453'
              >
                <path
                  id='Icon_ionic-ios-arrow-back'
                  data-name='Icon ionic-ios-arrow-back'
                  d='M13.052,11.419l3.955-3.952a.747.747,0,1,0-1.058-1.055L11.468,10.89a.746.746,0,0,0-.022,1.03l4.5,4.509A.747.747,0,1,0,17,15.374Z'
                  transform='translate(-11.251 -6.194)'
                  fill='#4d4d4d'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
