import React from 'react'
import CarouselData from './Fetch_Carousel_Data'

const page = () => {
  /* @ts-expect-error Server Component */
  return <CarouselData />
}

export default page
