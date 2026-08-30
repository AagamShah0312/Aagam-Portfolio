/**
 * ─────────────────────────────────────────────────────────────
 *  ~/profile.data  — every piece of content on the site lives
 *  here. Edit this file to update the portfolio.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Aagam Shah',
  username: 'AagamShah0312',
  roles: [
    'Full-Stack Developer',
    'AI + Backend Builder',
    'Computer Engineering Student',
  ],
  tagline: 'Building systems, not just features.',
  mode: 'build → break → understand → fix → ship',
  location: 'Ahmedabad, India',
  university: 'LJ University',
  avatar: 'https://avatars.githubusercontent.com/u/220456051?v=4',
  /** add your email here to enable the mail button in ~/connect */
  email: 'aagam0312@gmail.com',
  links: {
    github: 'https://github.com/AagamShah0312',
    linkedin: 'https://www.linkedin.com/in/aagam-shah-3bb04b3b0/',
  },
  about: [
    'I build software by taking a problem from idea → architecture → implementation → deployment.',
    'Most of my recent work has moved beyond classroom-sized applications into larger systems involving APIs, databases, authentication, document processing, AI services, background jobs, and deployment.',
  ],
  interests: [
    'Full-Stack Development',
    'Backend Engineering',
    'AI Engineering',
    'Document Intelligence',
    'System Design',
  ],
  currently: {
    building: ['UniBridge', 'JCM', 'AI-powered workflows', 'backend-heavy systems'],
    learning: ['system design', 'scalable architecture', 'AI engineering', 'cloud infrastructure'],
    exploring: ['document intelligence', 'retrieval systems', 'machine learning', 'developer tooling'],
  },
  notes: [
    'PDF ≠ text',
    'AI call ≠ AI system',
    'CRUD ≠ product',
    'Deployment ≠ "it worked locally"',
    'Schema changes ≠ free',
    'Authentication ≠ an afterthought',
  ],
}

export type Project = {
  name: string
  role: string
  description: string
  points?: string[]
  stack: string[]
  repo: string
  live?: string
}

export const featuredProjects: Project[] = [
  {
    name: 'UniBridge',
    role: 'University platform · AI + documents + planning',
    description:
      'A university platform for students, faculty, HODs and administration — combining academic workflows with AI-powered services, document intelligence, planning and predictive features.',
    points: [
      'AI academic conversations & faculty-note analysis',
      'Digital, scanned and photographed PDF processing',
      'OCR and document understanding',
      'PYQ extraction & topic analysis + practice quiz generation',
      'Academic-calendar-aware planning & marks prediction',
      'PostgreSQL + Prisma backend architecture',
    ],
    stack: ['TypeScript', 'PostgreSQL', 'Prisma', 'OCR', 'Gemini', 'AI'],
    repo: 'https://github.com/AagamShah0312/UniBridge_',
    live: 'https://uni-bridge-mu.vercel.app',
  },
  {
    name: 'JCM',
    role: 'Judicial Case Management System',
    description:
      'A production-oriented judicial case-management platform built around the case lifecycle — cases, parties, judges, lawyers, hearings, proceedings, orders, documents, timelines, permissions, notifications, search, analytics and AI-assisted case intelligence.',
    points: [
      'Full case lifecycle: parties → hearings → proceedings → orders',
      'Role-based permissions, audit trail & notifications',
      'Search, analytics & AI-assisted case intelligence',
      'Celery + Redis background jobs, pgvector for retrieval',
      'Dockerized end-to-end deployment',
    ],
    stack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Django 5.2',
      'DRF',
      'Celery',
      'Redis',
      'PostgreSQL',
      'pgvector',
      'Docker',
      'Gemini',
    ],
    repo: 'https://github.com/AagamShah0312/JCM',
  },
]

export const otherProjects: Project[] = [
  {
    name: 'TestVerse',
    role: 'Online exam platform',
    description:
      'Exam system with role-based access for students & staff — JWT auth, real-time exam monitoring, auto + manual evaluation, code-plagiarism detection and full analytics. Deployed on Render.',
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'Swagger'],
    repo: 'https://github.com/AagamShah0312/TestVerse',
  },
  {
    name: 'PausenPlay',
    role: 'Gaming café · live seat booking',
    description:
      'Marketing site with a live seat-booking system and a staff admin console — zero-dependency Node server, salted-scrypt auth, Dockerized.',
    stack: ['JavaScript', 'Node.js', 'Docker'],
    repo: 'https://github.com/AagamShah0312/pausenplay',
    live: 'https://pausenplay.vercel.app',
  },
  {
    name: 'FreellmAPI',
    role: 'Free LLM API gateway',
    description:
      'Self-hosted API service to run LLMs freely — deployed on Render and used to power my AI experiments.',
    stack: ['TypeScript', 'Node.js', 'REST'],
    repo: 'https://github.com/AagamShah0312/FreellmAPI',
    live: 'https://freellmapi-g235.onrender.com',
  },
  {
    name: 'Hackovate-LJ',
    role: 'Hackathon project',
    description:
      'Built at Hackovate-LJ — an idea taken from problem to working prototype under the clock.',
    stack: ['Hackathon'],
    repo: 'https://github.com/AagamShah0312/Hackovate-LJ',
  },
  {
    name: 'ODOO-2025',
    role: 'Skill Swapped',
    description:
      'Skill Swapped — skill-sharing project built in Java.',
    stack: ['Java'],
    repo: 'https://github.com/AagamShah0312/ODOO-2025',
  },
]

export const skills = [
  { title: 'languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'frontend', items: ['React', 'Vite', 'HTML', 'CSS'] },
  { title: 'backend', items: ['Node.js', 'Express', 'Django', 'REST APIs'] },
  { title: 'database', items: ['PostgreSQL', 'Prisma'] },
  { title: 'ai / docs', items: ['Gemini', 'OCR', 'OpenCV', 'Machine Learning'] },
  { title: 'infra', items: ['Docker', 'AWS', 'Git', 'GitHub', 'Supabase'] },
]
