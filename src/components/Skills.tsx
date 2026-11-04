import { certifications, education, skills } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills & Specialisms"
          index="04"
        />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal
            key={category}
            delay={i * 0.05}
            className="rounded-2xl border border-border p-6 transition-colors hover:border-accent"
          >
            <h3 className="font-mono text-sm font-medium uppercase tracking-wide text-accent">
              {category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-16">
        <SectionHeading eyebrow="Credentials" title="Education & Certifications" />
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-medium text-heading">Education</h3>
            <ul className="space-y-4">
              {education.map((ed) => (
                <li key={ed.degree}>
                  <p className="text-sm text-heading">{ed.degree}</p>
                  <p className="text-sm text-text-muted">{ed.org}</p>
                  <p className="font-mono text-xs text-text-muted">{ed.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium text-heading">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
