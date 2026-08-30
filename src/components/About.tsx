import { FiArrowRight, FiMapPin, FiUser } from 'react-icons/fi'
import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" path="~/about" title="who am i">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-14">
        <div className="space-y-5 leading-relaxed text-slate-400">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            I especially enjoy projects where the interesting part is{' '}
            <span className="text-slate-100">how all the pieces interact</span> —
            frontend, backend, database, AI, files, jobs, deploy — wired into one
            system that actually ships.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.interests.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-panel px-3.5 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-line bg-panel/70 p-6">
            <h3 className="mb-4 flex items-center gap-2 font-mono text-sm text-accent">
              <FiUser /> identity
            </h3>
            <dl className="space-y-3 font-mono text-[13px]">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">name</dt>
                <dd className="text-slate-100">Aagam Shah</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">status</dt>
                <dd className="text-slate-100">B.Tech · CSE student</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">college</dt>
                <dd className="text-slate-100">{profile.university}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">location</dt>
                <dd className="flex items-center gap-1 text-slate-100">
                  <FiMapPin className="h-3 w-3 text-accent" /> Ahmedabad, IN
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-line bg-panel/70 p-6">
            <h3 className="mb-4 font-mono text-sm text-accent">~/currently</h3>
            <div className="space-y-4">
              {(
                [
                  ['building', profile.currently.building],
                  ['learning', profile.currently.learning],
                  ['exploring', profile.currently.exploring],
                ] as const
              ).map(([label, items]) => (
                <div key={label}>
                  <p className="mb-1.5 font-mono text-xs text-slate-500">
                    {label}:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-line bg-ink px-2 py-0.5 font-mono text-[11px] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-sky"
            >
              full profile on GitHub
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </aside>
      </div>
    </Section>
  )
}
