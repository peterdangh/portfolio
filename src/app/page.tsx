import { SiteNav } from "@/components/site-nav";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { SpotlightCard } from "@/components/spotlight-card";
import { RotatingText } from "@/components/rotating-text";
import {
  profile,
  stats,
  experiences,
  highlights,
  skillGroups,
  awards,
  education,
  certification,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top" className="flex-1">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="aurora aurora-a" />
            <div className="aurora aurora-b" />
            <div className="grid-bg absolute inset-0" />
            <div className="noise absolute inset-0" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for senior / tech-lead roles
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 font-mono text-lg text-muted sm:text-xl">
                <span className="text-accent">{profile.role}</span> @ {profile.company}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">
                Building{" "}
                <RotatingText
                  words={["scalable", "distributed", "event-driven", "real-time"]}
                />{" "}
                systems in{" "}
                <span className="font-medium">Node.js</span> &{" "}
                <span className="font-medium">PHP</span>.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group relative overflow-hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-95"
                >
                  <span className="relative z-10">Get in touch</span>
                  <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-surface/70 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:border-accent hover:-translate-y-0.5"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="#experience"
                  className="rounded-lg px-5 py-2.5 text-sm font-semibold text-muted transition hover:text-foreground"
                >
                  View experience
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-6 flex items-center gap-2 font-mono text-sm text-muted">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {profile.location}
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={480}>
              <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="group bg-background p-5 transition-colors hover:bg-surface">
                    <dt className="font-display text-xl font-bold text-accent sm:text-2xl">
                      <CountUp value={s.value} />
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <Section id="about" eyebrow="01" title="About">
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
            <Reveal delay={60}>
              <p>{profile.summary}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-foreground">
                <span className="font-mono text-sm text-accent">// goal</span>
                <br />
                {profile.goal}
              </p>
            </Reveal>
          </div>
        </Section>

        {/* ── Experience ───────────────────────────────────── */}
        <Section id="experience" eyebrow="02" title="Experience">
          <ol className="relative space-y-10">
            {/* Continuous rail, centered on the 14px marker column (dot center = 7px) */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-[7px] top-3 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 via-border to-transparent"
            />
            {experiences.map((exp, idx) => (
              <Reveal
                as="li"
                key={exp.company}
                delay={idx * 90}
                className="relative flex gap-5 sm:gap-7"
              >
                <span className="relative z-10 mt-1.5 flex h-3.5 w-3.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                  <span className="relative h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-semibold">
                      {exp.title} <span className="text-accent">@ {exp.company}</span>
                    </h3>
                    <span className="font-mono text-sm text-muted">{exp.period}</span>
                  </div>
                  {exp.location && <p className="mt-1 text-sm text-muted">{exp.location}</p>}
                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex gap-3 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* ── Impact / Highlights ──────────────────────────── */}
        <Section id="work" eyebrow="03" title="Selected impact">
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((h, idx) => (
              <Reveal key={h.title} delay={idx * 90}>
                <SpotlightCard className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent">
                  <div className="font-display text-3xl font-bold text-accent">{h.metric}</div>
                  <h3 className="mt-3 text-lg font-semibold">{h.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{h.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── Skills ───────────────────────────────────────── */}
        <Section id="skills" eyebrow="04" title="Tech stack">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g, idx) => (
              <Reveal key={g.label} delay={idx * 70}>
                <SpotlightCard className="h-full rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent">
                  <h3 className="font-mono text-sm text-accent">{g.label}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── Awards / Education ───────────────────────────── */}
        <Section id="awards" eyebrow="05" title="Recognition & credentials">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-4">
              {awards.map((a, idx) => (
                <Reveal key={a.title} delay={idx * 90}>
                  <SpotlightCard className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                    <span className="text-2xl" aria-hidden>🏆</span>
                    <div>
                      <h3 className="font-semibold">
                        {a.title} <span className="font-mono text-sm text-muted">· {a.date}</span>
                      </h3>
                      <p className="text-sm text-accent">{a.issuer}</p>
                      <p className="mt-1 text-sm text-muted">{a.note}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
            <div className="space-y-4">
              <Reveal delay={60}>
                <SpotlightCard className="rounded-2xl border border-border bg-surface p-5">
                  <h3 className="font-mono text-sm text-accent">Certification</h3>
                  <p className="mt-2 font-semibold">{certification.title}</p>
                  <p className="text-sm text-muted">{certification.issuer}</p>
                </SpotlightCard>
              </Reveal>
              <Reveal delay={140}>
                <SpotlightCard className="rounded-2xl border border-border bg-surface p-5">
                  <h3 className="font-mono text-sm text-accent">Education</h3>
                  <p className="mt-2 font-semibold">{education.school}</p>
                  <p className="text-sm text-muted">{education.degree}</p>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="relative overflow-hidden border-t border-border">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="aurora aurora-a" style={{ top: "auto", bottom: "-20rem", left: "20%" }} />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
            <Reveal>
              <p className="font-mono text-sm text-accent">06 · Contact</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-gradient">reliable.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
                Open to senior backend and technical leadership opportunities.
                The fastest way to reach me:
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group relative overflow-hidden rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:opacity-95"
                >
                  <span className="relative z-10">{profile.email}</span>
                  <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold transition hover:border-accent hover:-translate-y-0.5"
                >
                  LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="flex items-center gap-2 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            available for work · Da Nang, VN
          </p>
        </div>
      </footer>
    </>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <Reveal>
          <div className="mb-10 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">{eyebrow}</span>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
