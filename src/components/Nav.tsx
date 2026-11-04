import { Briefcase, FlaskConical, FolderGit2, Mail, Menu, Wrench, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'

const links = [
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#research', label: 'Research', icon: FlaskConical },
  { href: '#skills', label: 'Skills', icon: Wrench },
  { href: '#contact', label: 'Contact', icon: Mail },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-bold uppercase tracking-wide text-heading"
        >
          hamza<span className="text-accent">.wakili</span>
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          <div className="flex items-center gap-1 rounded-full border border-border p-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-text-muted transition-colors hover:bg-accent-soft hover:text-accent"
              >
                <link.icon size={13} />
                {link.label}
              </a>
            ))}
          </div>
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
              className="text-sm font-medium uppercase tracking-wide text-text-muted hover:text-accent"
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
