import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-5xl flex-col justify-center px-6 pb-24 pt-20 sm:pt-32 sm:pb-32"
    >
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
        className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-heading sm:text-6xl"
      >
        {profile.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-text-muted"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          <Mail size={16} />
          Get in touch
        </a>
        <a
          href="#experience"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-accent hover:text-accent"
        >
          View experience
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  )
}
