import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import { profile } from '../data/profile'

const NAV_LINKS = [
  { href: '#about', label: 'about' },
  { href: '#toolbox', label: 'toolbox' },
  { href: '#projects', label: 'projects' },
  { href: '#github', label: 'github' },
  { href: '#connect', label: 'connect' },
]

function useScrollSpy() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const onScroll = () => {
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = 'connect'
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-mono font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
            A/
          </span>
          <span className="tracking-tight text-slate-100">
            aagam<span className="text-accent">.shah</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`rounded-md px-3 py-1.5 font-mono text-sm transition-colors ${
                active === href.slice(1)
                  ? 'text-accent'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              ~/{label}
            </a>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-md border border-line p-1.5 text-slate-400 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md border border-line p-1.5 text-slate-400 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <button
          className="rounded-md border border-line p-2 text-slate-300 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 font-mono text-sm ${
                  active === href.slice(1)
                    ? 'bg-accent/10 text-accent'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                ~/{label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
