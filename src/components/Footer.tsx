import { FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-5 py-10 sm:px-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5 font-mono text-sm text-slate-500">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent/40 bg-accent/10 text-xs font-bold text-accent">
            A/
          </span>
          <span>
            © {new Date().getFullYear()} Aagam Shah · built with React + TS +
            Tailwind
          </span>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <FiMapPin /> Ahmedabad, IN
          </span>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-accent"
          >
            <FiGithub className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-accent"
          >
            <FiLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-line/60 py-4 text-center">
        <p className="font-mono text-[11px] text-slate-700">
          {'// build something useful · break something interesting · learn why it broke · ship the next version'}
        </p>
      </div>
    </footer>
  )
}
