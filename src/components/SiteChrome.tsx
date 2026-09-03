import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { profile } from '../content'

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'Practice', id: 'practice' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
] as const

export function SiteHeader() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const currentActiveSection = location.pathname === '/'
    ? activeSection
    : location.pathname.startsWith('/work/') ? 'work' : ''

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (current?.target.id) setActiveSection(current.target.id)
      },
      { rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.6] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className={`site-header${compact ? ' is-compact' : ''}`}>
      <a className="wordmark" href="/" aria-label="Arvinder Singh home">
        <span>AS</span>
        <strong>Arvinder Singh</strong>
      </a>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={`${menuOpen ? 'Close' : 'Open'} navigation menu`}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true">{menuOpen ? 'Close' : 'Menu'}</span>
      </button>

      <nav id="site-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={currentActiveSection === item.id ? 'is-active' : ''}
            href={`/#${item.id}`}
            aria-current={currentActiveSection === item.id ? 'location' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="resume-link" href={profile.resume} download onClick={() => setMenuOpen(false)}>Résumé <span aria-hidden="true">↓</span></a>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-mark" href="/">AS</a>
      <p>© 2026 Arvinder Singh. Designed around evidence, clarity, and dependable systems.</p>
      <a href="#main-content">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  )
}
