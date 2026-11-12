import type { ReactNode } from 'react'
export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string
  label: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="folio-heading">
      <p className="folio-label">
        <span>{index}</span>
        {label}
      </p>
      <div>
        <h2>{title}</h2>
        {children && <p className="folio-intro">{children}</p>}
      </div>
    </header>
  )
}
