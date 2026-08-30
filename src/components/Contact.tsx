import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/profile'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="connect" path="~/connect" title="let's talk">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-3xl font-bold leading-tight text-slate-100 md:text-4xl">
            Have an idea?{' '}
            <span className="text-accent">Let's build something</span> useful.
          </h3>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
            I'm always up for interesting conversations — full-stack systems,
            AI integrations, backend architecture, or just a good problem that
            needs solving. I usually reply fast.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-accent px-5 py-3 font-mono text-sm font-bold text-ink transition-all hover:bg-sky hover:shadow-[0_0_28px_rgba(0,217,255,0.4)]"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-line px-5 py-3 font-mono text-sm text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FiLinkedin /> LinkedIn
            </a>
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 rounded-lg border border-line px-5 py-3 font-mono text-sm text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <FiMail /> Email
              </a>
            )}
          </div>
          {!profile.email && (
            <p className="mt-4 font-mono text-xs text-slate-600">
              # tip: add your email in src/data/profile.ts to enable the mail
              button
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-line bg-panel/70 p-6 font-mono text-[13px] leading-loose">
          <p className="mb-3 text-xs text-slate-600"># ~/.contact_info</p>
          <p>
            <span className="text-accent">name</span>
            <span className="text-slate-600"> .......... </span>
            <span className="text-slate-100">{profile.name}</span>
          </p>
          <p>
            <span className="text-accent">base</span>
            <span className="text-slate-600"> .......... </span>
            <span className="flex items-center gap-1.5 text-slate-100">
              <FiMapPin className="h-3.5 w-3.5 text-sky" /> {profile.location}
            </span>
          </p>
          <p>
            <span className="text-accent">github</span>
            <span className="text-slate-600"> ........ </span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-sky underline decoration-sky/40 underline-offset-4 hover:text-accent"
            >
              {profile.links.github.replace('https://', '')}
            </a>
          </p>
          <p>
            <span className="text-accent">linkedin</span>
            <span className="text-slate-600"> ...... </span>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sky underline decoration-sky/40 underline-offset-4 hover:text-accent"
            >
              {profile.links.linkedin.replace('https://www.', '')}
            </a>
          </p>
          <p>
            <span className="text-accent">status</span>
            <span className="text-slate-600"> ........ </span>
            <span className="text-emerald-400">open to opportunities</span>
          </p>
        </div>
      </div>
    </Section>
  )
}
