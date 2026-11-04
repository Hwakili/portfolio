export function BackgroundField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-grid"
    >
      <div
        className="absolute -left-40 top-[10%] h-[500px] w-[500px] rounded-full opacity-[0.15] blur-[130px]"
        style={{ background: 'var(--color-accent)' }}
      />
      <div
        className="absolute -right-40 top-[45%] h-[460px] w-[460px] rounded-full opacity-[0.12] blur-[130px]"
        style={{ background: 'var(--color-accent-3)' }}
      />
      <div
        className="absolute left-1/3 top-[80%] h-[420px] w-[420px] rounded-full opacity-[0.1] blur-[130px]"
        style={{ background: 'var(--color-accent-2)' }}
      />
    </div>
  )
}
