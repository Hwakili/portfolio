import { highlights } from '../data/content'
import { Reveal } from './Reveal'

export function Highlights() {
  return (
    <section className="border-y border-border bg-bg-elevated">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        {highlights.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05} className="text-center sm:text-left">
            <p className="text-3xl font-semibold text-accent sm:text-4xl">{item.stat}</p>
            <p className="mt-2 text-xs text-text-muted sm:text-sm">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
