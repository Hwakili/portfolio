export function SectionHeading({
  eyebrow,
  title,
  index,
}: {
  eyebrow: string
  title: string
  index?: string
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm tracking-wide text-accent">
        {index && <span className="text-text-muted">{index} / </span>}
        {eyebrow.toUpperCase()}
      </p>
      <h2 className="mt-2 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-heading sm:text-6xl">
        {title}
      </h2>
    </div>
  )
}
