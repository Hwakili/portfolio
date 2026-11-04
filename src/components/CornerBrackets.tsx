export function CornerBrackets() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-accent/40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-accent/40"
      />
    </>
  )
}
