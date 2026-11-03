import { ArrowUpRight } from 'lucide-react'
import { experience } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Career" title="Professional Experience" />
      </Reveal>

      <div className="space-y-10 border-l border-border pl-8">
        {experience.map((item, i) => (
          <Reveal key={item.role + item.org} delay={i * 0.05} className="relative">
            <span
              className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-bg ${
                item.current ? 'bg-accent' : 'bg-border'
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-heading">{item.role}</h3>
              <span className="font-mono text-xs text-text-muted">{item.period}</span>
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
