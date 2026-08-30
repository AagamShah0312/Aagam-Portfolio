import { useEffect, useState } from 'react'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/profile'

const BOOT_LINES: Array<{ label?: string; text: string; dim?: boolean }> = [
  { text: '> boot aagam.shah --verbose' },
  { label: 'identity', text: 'Computer Engineering Student' },
  { label: 'focus', text: 'Full-Stack + AI + Backend' },
  { label: 'based-in', text: 'Ahmedabad, India' },
  { label: 'current', text: 'building UniBridge + JCM' },
  { label: 'mode', text: profile.mode },
  { text: '> all systems operational.', dim: true },
]

function BootTerminal() {
  const [lines, setLines] = useState<number>(0)

  useEffect(() => {
    if (lines >= BOOT_LINES.length) return
    const t = setTimeout(() => setLines((l) => l + 1), lines === 0 ? 500 : 220)
    return () => clearTimeout(t)
  }, [lines])

  return (
    <div className="animate-float relative rounded-2xl border border-line bg-panel/80 shadow-2xl shadow-black/60 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-slate-500">aagam@lj-university: ~</span>
      </div>
      <div className="min-h-[15rem] space-y-2.5 p-5 font-mono text-[13px] leading-relaxed sm:min-h-[16rem]">
        {BOOT_LINES.slice(0, lines).map((line, i) => (
          <p
            key={i}
            className={`${line.dim ? 'text-slate-500' : line.label ? 'text-slate-300' : 'text-sky'}`}
          >
            {line.label ? (
              <>
                <span className="mr-1 text-slate-600">{'  '}{line.label}</span>
                <span className="mr-1 text-accent">::</span>
                <span className="text-slate-100">{line.text}</span>
              </>
            ) : (
              line.text
            )}
          </p>
        ))}
        <span className="inline-block h-4 w-2 animate-blink bg-accent align-middle" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background grid + glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,217,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.05) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-scan h-24 w-full bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 pt-32 sm:px-8 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-10 md:pb-24 md:pt-40">
        <div>
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-xs text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.location} · {profile.university}
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            <span className="text-slate-400">Hi, I'm</span>{' '}
            <span className="text-accent drop-shadow-[0_0_24px_rgba(0,217,255,0.35)]">
              {profile.name}
            </span>
            .
          </h1>

          <p className="mt-4 font-mono text-base text-sky sm:text-lg">
            &gt; {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-sm text-slate-400">
            {profile.roles.map((role) => (
              <span key={role} className="flex items-center gap-2">
                <span className="text-accent">▸</span> {role}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
            Computer Engineering student building production-grade systems —
            APIs, databases, authentication, document processing, AI services,
            background jobs, deployment. The fun starts when the pieces have to
            work together.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-mono text-sm font-bold text-ink transition-all hover:bg-sky hover:shadow-[0_0_28px_rgba(0,217,255,0.4)]"
            >
              view projects
              <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-mono text-sm text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
            >
              $ ping me
            </a>
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-accent"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-accent"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="transition-colors hover:text-accent"
                >
                  <FiMail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-slate-600">
            <FiMapPin className="h-3.5 w-3.5" /> based in Ahmedabad, India —
            building UniBridge + JCM right now
          </p>
        </div>

        <BootTerminal />
      </div>
    </section>
  )
}
