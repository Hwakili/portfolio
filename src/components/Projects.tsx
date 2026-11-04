import { ArrowUpRight, Globe } from 'lucide-react'
import { projects } from '../data/content'
import { tagColor } from '../lib/palette'
import { CornerBrackets } from './CornerBrackets'
import { GithubIcon } from './icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { TiltCard } from './TiltCard'

function ProjectCard({
  project,
  delay,
  span,
}: {
  project: (typeof projects)[number]
  delay: number
  span?: string
}) {
  return (
    <Reveal delay={delay} className={span}>
      <TiltCard
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-accent hover:shadow-[0_0_30px_-10px_var(--color-accent)] ${
          project.featured ? 'bg-bg-elevated' : ''
        }`}
      >
        <CornerBrackets />
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
            <span className="text-xs text-text-muted">{project.source}</span>
          )}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-heading">{project.title}</h3>
        <p className="mt-1 font-mono text-xs text-text-muted">{project.period}</p>
        <p className="mt-3 flex-1 text-sm text-text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, j) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tagColor(j)}`}
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
      </TiltCard>
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
          <ProjectCard
            key={project.title}
            project={project}
            delay={i * 0.05}
            span={i === 0 ? 'sm:col-span-2' : undefined}
          />
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
