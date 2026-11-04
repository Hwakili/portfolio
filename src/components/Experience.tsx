import { ArrowUpRight } from 'lucide-react'
import { experience } from '../data/content'
import { CornerBrackets } from './CornerBrackets'
import { OrgBadge } from './OrgBadge'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Career" title="Professional Experience" index="01" />
      </Reveal>

      <div className="space-y-6">
        {experience.map((item, i) => (
          <Reveal
            key={item.role + item.org}
            delay={i * 0.05}
            className="relative overflow-hidden rounded-2xl border border-border p-6 sm:p-8"
          >
            <CornerBrackets />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-6 select-none text-8xl font-black text-heading opacity-[0.04] sm:text-9xl"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-4">
              <OrgBadge name={item.org} index={i} />
              <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-heading sm:text-2xl">{item.role}</h3>
                <span className="font-mono text-xs text-text-muted">{item.period}</span>
              </div>
            </div>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm text-accent hover:underline"
              >
                {item.org}
                <ArrowUpRight size={13} />
              </a>
            ) : (
              <p className="mt-1 text-sm text-accent">{item.org}</p>
            )}
            <ul className="mt-3 space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
