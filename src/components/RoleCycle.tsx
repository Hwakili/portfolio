import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const roles = ['Cybersecurity Engineer', 'Digital Health Founder', 'MedTech Builder']

export function RoleCycle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="block whitespace-nowrap text-accent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
