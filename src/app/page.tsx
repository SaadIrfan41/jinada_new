import React from 'react'
import CarouselData from './Fetch_Carousel_Data'
import { PageWrapper } from '@/components/Page-Wrapper'

const page = () => {
  return (
    <PageWrapper>
      {/* @ts-expect-error Server Component */}
      <CarouselData />
    </PageWrapper>
  )
}

export default page
