type FaviconMarkProps = {
  className?: string
}

export function FaviconMark({ className }: FaviconMarkProps) {
  return <img className={className} src="/favicon.svg" alt="" aria-hidden="true" />
}
