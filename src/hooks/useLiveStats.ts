import { useEffect, useState } from 'react'

export interface GhRepo {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
  html_url: string
  homepage: string | null
  pushed_at: string | null
}

export interface GhUser {
  public_repos: number
  followers: number
  following: number
  avatar_url: string
  created_at: string
}

interface LiveStats {
  /** fetched from the live GitHub API */
  user: GhUser | null
  repos: GhRepo[]
  /** all-time commit count via the unauthenticated search API (may 403, handled gracefully) */
  totalCommits: number | null
  /** cached language breakdown, derived from live data */
  topLanguages: { language: string; bytes: number }[]
  loading: boolean
  error: boolean
}

const LS_KEY = 'aagam-portfolio-gh-stats'
const MAX_AGE_MS = 60 * 60 * 1000 // 1 hour

const FALLBACK = {
  user: {
    public_repos: 11,
    followers: 1,
    following: 1,
    avatar_url: 'https://avatars.githubusercontent.com/u/220456051?v=4',
    created_at: '2025-07-12T06:18:07Z',
  },
  topLanguages: [
    { language: 'TypeScript', bytes: 1 },
    { language: 'Python', bytes: 2 },
    { language: 'JavaScript', bytes: 3 },
    { language: 'CSS', bytes: 4 },
  ],
} as const

async function fetchTotalCommits(username: string): Promise<number | null> {
  const res = await fetch(
    `https://api.github.com/search/commits?q=author:${encodeURIComponent(username)}&per_page=1`,
    { headers: { Accept: 'application/vnd.github.cloak-preview+json' } },
  )
  if (!res.ok) return null
  const data = await res.json()
  return typeof data.total_count === 'number' ? data.total_count : null
}

async function fetchStats(username: string) {
  const [userRes, reposRes, commits] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
    fetchTotalCommits(username),
  ])
  if (!userRes.ok) throw new Error('gh-user-fetch-failed')

  const user: GhUser = await userRes.json()
  const repos: GhRepo[] = reposRes.ok ? await reposRes.json() : []

  // language breakdown from fetched repos
  const langBytes = new Map<string, number>()
  for (const repo of repos) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/languages`,
      )
      if (!res.ok) continue
      const langs: Record<string, number> = await res.json()
      for (const [lang, bytes] of Object.entries(langs)) {
        langBytes.set(lang, (langBytes.get(lang) ?? 0) + bytes)
      }
    } catch {
      /* skip this repo */
    }
  }
  const topLanguages = [...langBytes.entries()]
    .map(([language, bytes]) => ({ language, bytes }))
    .sort((a, b) => b.bytes - a.bytes)
    .slice(0, 8)

  return { user, repos, totalCommits: commits, topLanguages }
}

export function useLiveStats(username: string): LiveStats {
  const [state, setState] = useState<LiveStats>({
    user: null,
    repos: [],
    totalCommits: null,
    topLanguages: [],
    loading: true,
    error: false,
  })

  useEffect(() => {
    let cancelled = false

    try {
      const cached = localStorage.getItem(LS_KEY)
      if (cached) {
        const parsed = JSON.parse(cached) as {
          at: number
          data: Omit<LiveStats, 'loading' | 'error'>
        }
        if (Date.now() - parsed.at < MAX_AGE_MS) {
          setState({ ...parsed.data, loading: false, error: false })
          return
        }
      }
    } catch {
      /* corrupt cache — refetch */
    }

    fetchStats(username)
      .then((data) => {
        if (cancelled) return
        setState({ ...data, loading: false, error: false })
        try {
          localStorage.setItem(LS_KEY, JSON.stringify({ at: Date.now(), data }))
        } catch {
          /* storage full / private mode — fine */
        }
      })
      .catch(() => {
        if (cancelled) return
        setState({
          user: FALLBACK.user,
          repos: [],
          totalCommits: null,
          topLanguages: [...FALLBACK.topLanguages],
          loading: false,
          error: true,
        })
      })

    return () => {
      cancelled = true
    }
  }, [username])

  return state
}
