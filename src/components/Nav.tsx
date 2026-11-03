import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium text-heading">
          hamza<span className="text-accent">.wakili</span>
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-heading"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <button
          className="text-heading sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-border px-6 py-4 sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text-muted hover:text-heading"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} className="text-text-muted" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} className="text-text-muted" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
