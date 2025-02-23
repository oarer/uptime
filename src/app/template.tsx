'use client'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        opacity: { duration: 0.5, delay: 0.1 },
        y: { duration: 0.8, delay: 0.1 },
      }}
    >
      {children}
    </motion.div>
  )
}