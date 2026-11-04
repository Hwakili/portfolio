import { ArrowUpRight, Globe } from 'lucide-react'
import { projects } from '../data/content'
import { GithubIcon } from './icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function ProjectCard({ project, delay }: { project: (typeof projects)[number]; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div
        className={`group flex h-full flex-col rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_30px_-10px_var(--color-accent)] ${
          project.featured ? 'bg-bg-elevated' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-wide text-accent">
            {project.category}
          </span>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label="View on GitHub"
              className="flex items-center gap-1 text-text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={14} />
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="text-xs text-text-muted">Academic</span>
          )}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-heading">{project.title}</h3>
        <p className="mt-1 font-mono text-xs text-text-muted">{project.period}</p>
        <p className="mt-3 flex-1 text-sm text-text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-accent hover:underline"
          >
            <Globe size={13} />
            {project.homepage.replace(/^https?:\/\//, '')}
          </a>
        )}
      </div>
    </Reveal>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="border-t border-border mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Build & Break" title="Projects" index="02" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-3">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 0.05} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 0.04} />
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <a
          href="https://github.com/Hwakili"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
        >
          <GithubIcon size={16} />
          View all repositories on GitHub
          <ArrowUpRight size={14} />
        </a>
      </Reveal>
    </section>
  )
}
