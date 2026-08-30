import { skills } from '../data/profile'
import { Section } from './Section'

const SKILL_BARS = [
  { label: 'java', width: '90%' },
  { label: 'python', width: '88%' },
  { label: 'typescript', width: '80%' },
  { label: 'javascript', width: '80%' },
  { label: 'react', width: '82%' },
  { label: 'node.js', width: '76%' },
  { label: 'django', width: '78%' },
  { label: 'postgresql', width: '74%' },
]

export function Skills() {
  return (
    <Section id="toolbox" path="~/toolbox" title="tech stack">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="group rounded-2xl border border-line bg-panel/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_rgba(0,217,255,0.08)]"
          >
            <h3 className="mb-4 font-mono text-sm text-accent">
              <span className="text-slate-600">##</span> {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors group-hover:border-accent/25"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-line bg-panel/60 p-6 md:p-8">
        <p className="mb-6 font-mono text-xs text-slate-500">
          # relative comfort, terminal-style — because ASCII {'>'} pie charts
        </p>
        <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
          {SKILL_BARS.map(({ label, width }) => (
            <div key={label}>
              <div className="mb-1.5 flex items-baseline justify-between font-mono text-xs">
                <span className="text-slate-300">{label}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-ink">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent shadow-[0_0_12px_rgba(0,217,255,0.5)]"
                  style={{ width }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-slate-600">
          // always compiling: system design · scalable architecture · AI
          engineering · cloud infrastructure
        </p>
      </div>
    </Section>
  )
}
