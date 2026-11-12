import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Asterisk, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigationItems } from '@/data/navigation'
export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])
  useEffect(() => {
    if (!open) return
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', escape)
    return () => window.removeEventListener('keydown', escape)
  }, [open])
  return (
    <header className="folio-navbar">
      <Link to="/" className="folio-brand" aria-label="Randhu home">
        randhu
        <Asterisk aria-hidden="true" />
      </Link>
      <button
        ref={toggleRef}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="main-navigation"
        className={open ? 'folio-nav is-open' : 'folio-nav'}
        aria-label="Main navigation"
      >
        {navigationItems.map((item, index) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
            <sup>0{index + 1}</sup>
            {item.label}
          </NavLink>
        ))}
        <Link to="/contact" className="nav-conversation" onClick={() => setOpen(false)}>
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  )
}
