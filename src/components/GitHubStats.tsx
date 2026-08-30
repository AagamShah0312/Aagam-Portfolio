import { useEffect, useMemo, useState } from 'react'
import {
  FiArrowUpRight,
  FiGithub,
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiGitCommit,
  FiBook,
} from 'react-icons/fi'
import { useLiveStats } from '../hooks/useLiveStats'
import { profile } from '../data/profile'
import { Section } from './Section'

const PALETTE = [
  '#00d9ff', // accent
  '#fbbf24', // amber
  '#a78bfa', // violet
  '#34d399', // emerald
  '#f87171', // red
  '#f472b6', // pink
  '#60a5fa', // blue
  '#e2e8f0', // slate
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
}

export function GitHubStats() {
  const { user, repos, totalCommits, topLanguages, loading, error } = useLiveStats(
    profile.username,
  )
  const [langReady, setLangReady] = useState(false)

  useEffect(() => {
    if (!loading && topLanguages.length > 0) {
      const t = setTimeout(() => setLangReady(true), 300)
      return () => clearTimeout(t)
    }
  }, [loading, topLanguages])

  const bar = useMemo(() => {
    const total = topLanguages.reduce((sum, l) => sum + l.bytes, 0) || 1
    return topLanguages.map((l, i) => ({
      ...l,
      pct: (l.bytes / total) * 100,
      color: PALETTE[i % PALETTE.length],
    }))
  }, [topLanguages])

  const sourceRepos = useMemo(
    () =>
      [...repos]
        .filter((r) => !r.fork && r.name !== profile.username)
        .sort(
          (a, b) =>
            b.stargazers_count - a.stargazers_count || a.name.localeCompare(b.name),
        ),
    [repos],
  )

  const stats = [
    { icon: FiBook, label: 'public repos', value: user?.public_repos ?? '—' },
    { icon: FiGitCommit, label: 'commits', value: totalCommits ?? '—' },
    { icon: FiStar, label: 'stars earned', value: sourceRepos.reduce((s, r) => s + r.stargazers_count, 0) },
    { icon: FiUsers, label: 'followers', value: user?.followers ?? '—' },
  ]

  return (
    <Section id="github" path="~/github" title="live activity">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/40"
          >
            <Icon className="mb-3 h-5 w-5 text-accent" />
            <p className="font-mono text-3xl font-bold text-slate-100">{value}</p>
            <p className="mt-1 font-mono text-xs text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-line bg-panel/60 p-6">
          <p className="mb-5 font-mono text-xs text-slate-500">
            # languages across all repositories
          </p>
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-ink">
            {bar.map((l) => (
              <div
                key={l.language}
                className="h-full transition-all duration-700 ease-out"
                style={{
                  width: langReady ? `${l.pct}%` : '0%',
                  backgroundColor: l.color,
                }}
                title={l.language}
              />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {bar.map((l) => (
              <span key={l.language} className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: l.color }} />
                {l.language}
                <span className="text-slate-600">{Math.round(l.pct)}%</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-line bg-panel/60 p-6">
          <p className="mb-4 font-mono text-xs text-slate-500"># recency log</p>
          {loading ? (
            <div className="flex-1 space-y-3 py-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 animate-pulse rounded bg-line/50" />
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
              {repos.slice(0, 5).map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-transparent px-2 py-1.5 transition-colors hover:border-line hover:bg-ink/60"
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <FiTrendingUp className="h-3.5 w-3.5 shrink-0 text-accent/70" />
                      <span className="truncate font-mono text-sm text-slate-200 group-hover:text-accent">
                        {repo.name}
                      </span>
                      {repo.language && (
                        <span className="hidden rounded bg-line/60 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 sm:inline">
                          {repo.language}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-slate-600">
                      {repo.pushed_at ? formatDate(repo.pushed_at) : '—'}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="group mt-auto inline-flex items-center gap-2 pt-5 font-mono text-xs text-accent hover:text-sky"
          >
            see everything on GitHub
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {error && (
        <p className="mt-4 font-mono text-xs text-slate-600">
          # live GitHub API rate-limited right now — showing cached/snapshot data
        </p>
      )}

      <div className="mt-8 rounded-2xl border border-line bg-panel/60 p-6">
        <p className="mb-4 font-mono text-xs text-slate-500">
          # every public repository, sorted by stars
        </p>
        <div className="flex flex-wrap gap-2">
          {sourceRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-line bg-ink/60 px-3 py-2 font-mono text-xs text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
            >
              <FiGithub className="h-3.5 w-3.5 text-slate-500" />
              {repo.name}
              {repo.stargazers_count > 0 && (
                <span className="flex items-center gap-1 text-amber">
                  <FiStar className="h-3 w-3" />
                  {repo.stargazers_count}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
