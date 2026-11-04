import { getOrgIcon } from '../lib/orgIcons'

const palette = [
  { bg: 'var(--color-accent)', text: 'var(--color-bg)' },
  { bg: 'var(--color-accent-2)', text: 'var(--color-bg)' },
  { bg: 'var(--color-accent-3)', text: 'var(--color-bg)' },
  { bg: 'var(--color-accent-4)', text: 'var(--color-bg)' },
  { bg: 'var(--color-accent-5)', text: 'var(--color-bg)' },
]

function initials(name: string): string {
  const words = name
    .replace(/\(.*?\)/g, '')
    .split(/[\s&/,-]+/)
    .filter((w) => w.length > 1 || /[A-Z]/.test(w))
  if (words.length === 0) return name.slice(0, 2).toUpperCase()
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export function OrgBadge({
  name,
  index = 0,
  logo,
}: {
  name: string
  index?: number
  logo?: string
}) {
  const colors = palette[index % palette.length]
  const Icon = getOrgIcon(name)

  if (logo) {
    return (
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-elevated p-1.5">
        <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain" />
      </span>
    )
  }

  if (Icon) {
    return (
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-elevated border border-border"
        aria-hidden="true"
      >
        <Icon size={22} />
      </span>
    )
  }

  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold text-sm"
      style={{ background: colors.bg, color: colors.text }}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  )
}
