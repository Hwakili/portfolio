export function Glow() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-0 -z-10 h-[480px] w-[620px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            'radial-gradient(closest-side, var(--color-accent), transparent)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-3/4 top-20 -z-10 h-[420px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-[110px]"
        style={{
          background:
            'radial-gradient(closest-side, var(--color-accent-2), transparent)',
        }}
      />
    </>
  )
}
