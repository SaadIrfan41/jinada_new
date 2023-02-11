import Carousel from '@/components/Carousel'
import React from 'react'

export type carouselDataType = {
  id: number
  firstLine: string
  secondLine: string
  thirdLine: string
  fourthLine: string
  fifthLine: string
  image: string
  backgroundColor: string
  fontSize: string
  ctaBackgroundColor: string
  textColor: string
  ctaArrowColor: string
  socialIconsColor: string
  paginationDotsColorActive: string
  paginationDotsColorNonActive: string
  headerColor: string
}

export interface carouselInterface {
  carouselData: carouselDataType[]
}

async function fetchCarouselData() {
  // let res = await fetch('http://localhost:3000/api/carouselData')
  let res = 'Hello'
  return res
}

const CarouselData = async () => {
  const carousel = await fetchCarouselData()
  // const carousel: carouselInterface = await fetchCarouselData()

  // return <Carousel carouselData={carousel.carouselData} />
  return carousel
}

export default CarouselData
