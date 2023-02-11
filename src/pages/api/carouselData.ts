// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }
const carouselData = [
  {
    id: 1122,
    firstLine: 'HOUSE OF DIGITAL MARKETING',
    secondLine: 'Where Ideas',
    thirdLine: 'Are Born',
    fourthLine: `E-com services & solution, from setting up your online store to increasing your revenue through marketing strategies, Full Stack eCom is where your expectations meet reality.`,
    fifthLine: 'See details',
    image: '/image01.png',
    backgroundColor: 'bg-gray-900',
    fontSize: 'text-base',
    textColor: 'text-gray-300',
    ctaBackgroundColor: 'bg-white',
    ctaArrowColor: '#000000',
    socialIconsColor: '#e9e9e9',
    paginationDotsColorActive: 'bg-white',
    paginationDotsColorNonActive: 'bg-gray-600',
    headerColor: '#fcbd00',
  },
  {
    id: 3344,
    firstLine: 'HOUSE OF DIGITAL MARKETING',
    secondLine: 'Team of',
    thirdLine: 'Innovators',
    fourthLine: `A team of innovators with a vision of improving eCommerce,
making it a successful business for everyone.`,
    fifthLine: 'Schedule A Call',
    image: '/image02.png',
    backgroundColor: 'bg-gold',
    ctaBackgroundColor: 'bg-black',
    fontSize: 'text-base',
    textColor: 'text-gray-900',
    ctaArrowColor: '#fff',
    socialIconsColor: '#202020',
    paginationDotsColorActive: 'bg-white',
    paginationDotsColorNonActive: 'bg-[#FEE18C]',
    headerColor: '#202020',
  },
  {
    id: 5566,
    firstLine: 'HOUSE OF DIGITAL MARKETING',
    secondLine: 'There Is No “One” Key',
    thirdLine: 'To Success',
    fourthLine: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    fifthLine: 'Get Started',
    image: '/image03.png',
    backgroundColor: 'bg-white',
    fontSize: 'text-base',
    ctaBackgroundColor: 'bg-black',
    textColor: 'text-gray-900',
    ctaArrowColor: '#fff',
    socialIconsColor: '#202020',
    paginationDotsColorActive: 'bg-black',
    paginationDotsColorNonActive: 'bg-[#919191]',
    headerColor: '#fcbd00',
  },
]
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ carouselData: carouselData })
}
