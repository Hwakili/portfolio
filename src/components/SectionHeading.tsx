export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent tracking-wide">{eyebrow}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-heading">
        {title}
      </h2>
    </div>
  )
}
