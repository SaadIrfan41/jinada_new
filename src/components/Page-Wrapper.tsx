'use client'

import { motion } from 'framer-motion'

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ x: 2000 }}
    animate={{
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeIn',
      },
    }}
    exit={{ x: 2000 }}
    className=' min-h-screen'
  >
    {children}
  </motion.div>
)
