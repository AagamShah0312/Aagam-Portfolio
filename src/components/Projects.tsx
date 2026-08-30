import type { ReactNode } from 'react'
import { FiArrowUpRight, FiCheck, FiFolder, FiGithub } from 'react-icons/fi'
import { featuredProjects, otherProjects, type Project } from '../data/profile'
import { Section } from './Section'

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const isLeft = index % 2 === 0
  const Stack = (
    <div className="mt-6 flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-line bg-ink/60 px-2.5 py-1 font-mono text-[11px] text-slate-400"
        >
          {tech}
        </span>
      ))}
    </div>
  )
  const Links = (
    <div className="mt-6 flex items-center gap-3 font-mono text-sm">
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/5 px-4 py-2 text-accent transition-all hover:bg-accent hover:text-ink"
      >
        <FiGithub /> source
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
        >
          live demo <FiArrowUpRight />
        </a>
      )}
    </div>
  )

  return (
    <article
      className={`relative grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-0 ${
        isLeft ? '' : 'lg:[direction:rtl]'
      }`}
    >
      <div className={`lg:col-span-2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'} lg:[direction:ltr]`}>
        <p className="font-mono text-xs text-accent">0{index + 1} // featured</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-100 md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 font-mono text-sm text-sky">{project.role}</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
          {project.description}
        </p>
        {project.points && (
          <ul className="mt-6 grid max-w-2xl gap-2.5 sm:grid-cols-2">
            {project.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-slate-400">
                <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {Stack}
        {Links}
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-panel/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_rgba(0,217,255,0.08)]">
      <div className="mb-4 flex items-center justify-between">
        <FiFolder className="h-8 w-8 text-accent/70" />
        <div className="flex items-center gap-2.5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="text-slate-500 transition-colors hover:text-accent"
            >
              <FiArrowUpRight className="h-4.5 w-4.5" />
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} repository`}
            className="text-slate-500 transition-colors hover:text-accent"
          >
            <FiGithub className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-accent">
        {project.name}
      </h3>
      <p className="mb-4 font-mono text-xs text-sky">{project.role}</p>
      <p className="flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-[11px] text-slate-500">
            {tech}
            <span className="text-slate-700"> · </span>
          </span>
        ))}
      </div>
    </article>
  )
}

function Divider({ children }: { children?: ReactNode }) {
  return (
    <div className="mt-16 mb-8 flex items-center gap-4 md:mt-20">
      <h3 className="font-mono text-sm text-slate-300">
        <span className="text-accent">$</span> ls ~/projects --others
      </h3>
      <div className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
      {children}
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" path="~/projects" title="selected work">
      <div className="space-y-14 md:space-y-20">
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.name} project={project} index={i} />
        ))}
      </div>

      <Divider />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
