import { Microscope } from 'lucide-react'
import { research } from '../data/content'
import { CornerBrackets } from './CornerBrackets'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Research() {
  return (
    <section id="research" className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Impact"
            title="Academic Collaboration & Research"
            index="03"
          />
        </Reveal>

        {research.map((item, i) => (
          <Reveal
            key={item.role}
            delay={i * 0.05}
            className="relative overflow-hidden rounded-2xl border border-border bg-bg p-6 transition-colors hover:border-accent sm:p-8"
          >
            <CornerBrackets />
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Microscope size={20} />
              </span>
              <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-heading sm:text-2xl">{item.role}</h3>
                <span className="font-mono text-xs text-text-muted">{item.period}</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-accent">{item.org}</p>
            <ul className="mt-4 space-y-2">
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
