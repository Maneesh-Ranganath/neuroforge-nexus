import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowRight,
  Bot,
  Bug,
  CheckCircle2,
  FolderKanban,
  Gauge,
  GitBranch,
  Rocket,
  ShieldCheck,
  Tag,
  Timer,
  Users,
} from 'lucide-react'
import { Avatar, BrandMark, ProgressBar, StatusPill } from '../components/ui'

/* ═══════════════════════════════════════════════════════════════
   Public landing page. Uses only the shared forge tokens, the
   nf-* component classes and the ui.jsx primitives so it matches
   Login / Register / the app shell exactly.
   ═══════════════════════════════════════════════════════════════ */

const FEATURES = [
  {
    icon: FolderKanban,
    title: 'Projects & Teams',
    text: 'Organize squads, leads and projects with clear ownership and live status.',
    tint: 'bg-ember-500/10 text-ember-400 ring-1 ring-ember-500/25',
  },
  {
    icon: Timer,
    title: 'Sprints & Kanban',
    text: 'Plan sprints, drag work across the board and watch velocity and burndown.',
    tint: 'bg-steel-500/10 text-steel-400 ring-1 ring-steel-500/25',
  },
  {
    icon: Rocket,
    title: 'CI/CD Pipelines',
    text: 'Follow every build through Build, Test, Sonar, Docker and Deploy stages.',
    tint: 'bg-signal-success/10 text-signal-success ring-1 ring-signal-success/25',
  },
  {
    icon: Tag,
    title: 'Releases',
    text: 'Draft, publish and roll back releases with a changelog attached to each one.',
    tint: 'bg-signal-warning/10 text-signal-warning ring-1 ring-signal-warning/25',
  },
  {
    icon: Gauge,
    title: 'Deployments',
    text: 'See DEV, STAGING and PROD at a glance. Deploy a good build or roll it back.',
    tint: 'bg-ember-500/10 text-ember-400 ring-1 ring-ember-500/25',
  },
  {
    icon: Activity,
    title: 'Monitoring',
    text: 'Pipeline health, success-rate and coverage trends in a single view.',
    tint: 'bg-steel-500/10 text-steel-400 ring-1 ring-steel-500/25',
  },
  {
    icon: GitBranch,
    title: 'Repository',
    text: 'Connect a repo to follow commits and pull requests next to your sprints.',
    tint: 'bg-signal-success/10 text-signal-success ring-1 ring-signal-success/25',
  },
  {
    icon: Bug,
    title: 'Bug Reports',
    text: 'Capture, triage and track defects alongside the work that fixes them.',
    tint: 'bg-signal-danger/10 text-signal-danger ring-1 ring-signal-danger/25',
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    text: 'Ask questions or create a project in plain language from anywhere in the app.',
    tint: 'bg-steel-500/10 text-steel-400 ring-1 ring-steel-500/25',
  },
]

const STAGES = ['Plan', 'Build', 'Test', 'Sonar', 'Docker', 'Deploy']

const ACCESS_TIERS = [
  {
    title: 'Managers',
    roles: 'Admin · Project Lead · Project Manager',
    points: [
      'Create and edit teams, projects, sprints and tasks',
      'Publish releases, deploy and roll back',
      'Org-wide dashboard with every project',
    ],
    accent: 'text-ember-400',
  },
  {
    title: 'Contributors',
    roles: 'Developer · Designer · QA · Employee',
    points: [
      'See every project, sprint and pipeline',
      'Update the status of tasks assigned to you',
      'Personal dashboard with your own task board',
    ],
    accent: 'text-steel-400',
  },
]

/** Static, decorative product preview built from the real UI primitives. */
function ProductPreview() {
  const rows = [
    { name: 'Atlas Auth Service', status: 'ACTIVE', progress: 72, people: ['Asha Rao', 'Dev Patel', 'Mia Chen'] },
    { name: 'Nexus Billing', status: 'PLANNING', progress: 25, people: ['Leo Kim', 'Sara Ali'] },
    { name: 'Pulse Analytics', status: 'COMPLETED', progress: 100, people: ['Tom Reed', 'Ivy Wong', 'Raj Nair'] },
  ]
  return (
    <div className="nf-card relative overflow-hidden shadow-2xl shadow-black/40" aria-hidden>
      <div className="flex items-center gap-2 border-b border-forge-700/70 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-signal-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal-success/70" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-forge-faint">
          nexus / dashboard
        </span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            ['Projects', '12'],
            ['Active sprints', '4'],
            ['Build success', '96%'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-forge-700/60 bg-forge-850/60 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-forge-muted">{label}</p>
              <p className="mt-1.5 font-mono text-xl font-semibold text-forge-text">{value}</p>
            </div>
          ))}
        </div>

        <ul className="mt-4 space-y-2.5">
          {rows.map((row) => (
            <li
              key={row.name}
              className="rounded-lg border border-forge-700/60 bg-forge-850/50 px-4 py-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm font-semibold text-forge-text">{row.name}</p>
                <StatusPill status={row.status} />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <ProgressBar
                  value={row.progress}
                  barClassName={row.progress === 100 ? 'bg-signal-success' : 'bg-ember-500'}
                />
                <span className="font-mono text-[11px] text-forge-muted">{row.progress}%</span>
                <div className="flex -space-x-2">
                  {row.people.map((p) => (
                    <Avatar key={p} name={p} className="h-6 w-6 text-[9px] ring-2 ring-forge-900" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-forge-950 text-forge-text">
      {/* Ambient forge glow (same as AuthShell) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-ember-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-[28rem] h-[32rem] w-[32rem] rounded-full bg-steel-500/10 blur-3xl"
      />

      {/* ── Top nav ───────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-forge-700/70 bg-forge-900/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link to="/welcome" aria-label="NeuroForge Nexus home">
            <BrandMark />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-forge-muted md:flex">
            <a href="#features" className="transition hover:text-forge-text">Features</a>
            <a href="#workflow" className="transition hover:text-forge-text">Workflow</a>
            <a href="#access" className="transition hover:text-forge-text">Roles</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="nf-btn-ghost">Sign in</Link>
            <Link to="/register" className="nf-btn-primary hidden sm:inline-flex">Get started</Link>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* ── Hero ────────────────────────────────────────── */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-10 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-ember-300">
              <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
              SDLC &amp; project management
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Forge software.
              <br />
              <span className="text-ember-400">Ship with fire.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-forge-muted">
              NeuroForge Nexus keeps squads, sprints, pipelines and releases smelting in one place
              — from the first spark to production.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/register" className="nf-btn-primary px-5">
                Create an account <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/login" className="nf-btn-ghost px-5">Sign in</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-forge-muted">
              {['Role-aware access', 'Live CI/CD data', 'Sprint boards'].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-signal-success" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <ProductPreview />
        </section>

        {/* ── Features ────────────────────────────────────── */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-forge-faint">
            Everything in one workspace
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
            One forge for the whole lifecycle
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, text, tint }) => (
              <div key={title} className="nf-card p-5 transition hover:border-forge-600">
                <span className={`grid h-10 w-10 place-items-center rounded-lg ${tint}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-forge-muted">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Workflow ────────────────────────────────────── */}
        <section id="workflow" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-10">
          <div className="nf-card p-6 sm:p-10">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-forge-faint">
              Spark to production
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
              Every build, stage by stage
            </h2>
            <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {STAGES.map((stage, i) => (
                <li
                  key={stage}
                  className="rounded-lg border border-forge-700/60 bg-forge-850/50 px-4 py-4"
                >
                  <span className="font-mono text-[11px] text-ember-400">0{i + 1}</span>
                  <p className="mt-1 font-display text-sm font-semibold">{stage}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Role-based access ───────────────────────────── */}
        <section id="access" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-signal-success/10 text-signal-success ring-1 ring-signal-success/25">
              <ShieldCheck className="h-4 w-4" aria-hidden />
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight">Role-aware by design</h2>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-forge-muted">
            The interface only offers what your role can actually do, so nobody hits a wall.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ACCESS_TIERS.map((tier) => (
              <div key={tier.title} className="nf-card p-6">
                <div className="flex items-center gap-2">
                  <Users className={`h-4 w-4 ${tier.accent}`} aria-hidden />
                  <h3 className="font-display text-lg font-semibold">{tier.title}</h3>
                </div>
                <p className="mt-1 font-mono text-[11px] text-forge-faint">{tier.roles}</p>
                <ul className="mt-4 space-y-2.5 text-sm text-forge-muted">
                  {tier.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-signal-success" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final CTA ───────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-10">
          <div className="nf-card relative overflow-hidden px-6 py-12 text-center sm:px-10">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/15 blur-3xl"
            />
            <h2 className="relative font-display text-3xl font-bold tracking-tight">
              Ready to stoke the forge?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm text-forge-muted">
              Create an account and have your first project running in minutes.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/register" className="nf-btn-primary px-5">
                Get started <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/login" className="nf-btn-ghost px-5">Sign in</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-forge-700/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6 lg:px-10">
          <BrandMark />
          <p className="font-mono text-[11px] text-forge-faint">
            © {new Date().getFullYear()} NeuroForge Nexus
          </p>
        </div>
      </footer>
    </div>
  )
}
