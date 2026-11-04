import { getTechIcon } from '../lib/techIcons'
import { tagColor } from '../lib/palette'

export function TagBadge({ label, index }: { label: string; index: number }) {
  const Icon = getTechIcon(label)

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tagColor(index)}`}
    >
      {Icon && <Icon size={13} />}
      {label}
    </span>
  )
}
