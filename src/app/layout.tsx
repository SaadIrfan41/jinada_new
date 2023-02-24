import Navbar from '@/components/Navbar'
import './globals.css'
import 'animate.css'
import Footer from '@/components/Footer'
import { PageWrapper } from '@/components/Page-Wrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <PageWrapper> */}
        <div className=' font-montserrat'>
          <Navbar />
          {children}

          {/* <Footer /> */}
        </div>
        {/* </PageWrapper> */}
      </body>
    </html>
  )
}
