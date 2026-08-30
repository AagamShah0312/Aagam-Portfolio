import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  id?: string
  /** terminal-style path label, e.g. "~/about" */
  path: string
  title: string
  children: ReactNode
}

/**
 * Terminal-styled section shell: `~/about` header + animated content reveal.
 */
export function Section({ id, path, title, children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>(0.08)

  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto w-full max-w-6xl px-5 py-20 transition-all duration-700 ease-out sm:px-8 md:py-24 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-10 flex items-center gap-4 md:mb-14">
        <h2 className="font-mono text-lg text-accent md:text-xl">
          <span className="text-slate-500">$</span> cd {path}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
        <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-slate-600 sm:block">
          {title}
        </span>
      </div>
      {children}
    </section>
  )
}
