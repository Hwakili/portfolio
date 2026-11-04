import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { useRef } from 'react'
import { profile } from '../data/content'
import { Glow } from './Glow'
import { RoleCycle } from './RoleCycle'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative mx-auto flex max-w-5xl flex-col justify-center overflow-hidden px-6 pb-24 pt-20 sm:pt-32 sm:pb-32"
    >
      <Glow />

      <motion.div style={{ y, opacity }}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent"
      >
        Hi, I&apos;m Hamza
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-6xl font-bold uppercase leading-[0.95] tracking-tight text-heading sm:text-8xl"
      >
        Hamza
        <br />
        <span className="text-gradient">Wakili</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 text-2xl font-medium leading-tight sm:text-4xl"
      >
        <RoleCycle />
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 max-w-2xl text-lg text-text-muted"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
        >
          <Mail size={16} />
          Get in touch
        </a>
        <a
          href="#experience"
          className="inline-flex items-center gap-2 rounded-full border-2 border-border px-6 py-3 text-sm font-bold uppercase tracking-wide text-heading transition-colors hover:border-accent hover:text-accent"
        >
          View experience
          <ArrowDown size={16} />
        </a>
      </motion.div>
      </motion.div>
    </section>
  )
}
