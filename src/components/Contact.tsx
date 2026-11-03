import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-bg-elevated px-6 py-24"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm text-accent">Get in touch</p>
        <h2 className="mt-2 text-3xl font-semibold text-heading sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 text-text-muted">
          Open to conversations on endpoint security, enterprise
          infrastructure, or digital health. Reach out below.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-accent hover:text-accent"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <p className="mt-20 text-center font-mono text-xs text-text-muted">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  )
}
