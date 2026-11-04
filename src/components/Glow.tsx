export function Glow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-[110px]"
      style={{
        background:
          'radial-gradient(closest-side, var(--color-accent), transparent)',
      }}
    />
  )
}
