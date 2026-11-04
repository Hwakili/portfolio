import { marqueeItems } from '../data/content'

const dotColors = [
  'bg-accent',
  'bg-[#38bdf8]',
  'bg-[#c084fc]',
  'bg-[#fbbf24]',
  'bg-[#fb7185]',
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-bg-elevated py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center">
            {marqueeItems.map((item, i) => (
              <span
                key={`${rep}-${item}-${i}`}
                className="flex items-center whitespace-nowrap px-6 text-lg font-bold uppercase tracking-wide text-text-muted"
              >
                {item}
                <span
                  className={`ml-6 h-1.5 w-1.5 rounded-full ${dotColors[i % dotColors.length]}`}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
