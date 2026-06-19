import Link from "next/link";
import {
  BarChart3,
  Clock3,
  Link2,
  QrCode,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      title: "One-click short links",
      description:
        "Create clean, branded URLs in seconds without leaving your workflow.",
      icon: Link2,
    },
    {
      title: "Live analytics",
      description:
        "Track clicks, top sources, and location trends with real-time reporting.",
      icon: BarChart3,
    },
    {
      title: "Smart QR generation",
      description:
        "Turn every short URL into a scan-ready QR code for print and social campaigns.",
      icon: QrCode,
    },
    {
      title: "Reliable redirect speed",
      description:
        "Fast redirects and global delivery keep every visitor in flow.",
      icon: Zap,
    },
    {
      title: "Link safety controls",
      description:
        "Built-in guardrails help you keep destination links trusted and secure.",
      icon: ShieldCheck,
    },
    {
      title: "Effortless team sharing",
      description:
        "Share and manage link collections with clear ownership and visibility.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="flex-1 bg-background">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklch,var(--primary),white_78%)_0,transparent_50%),radial-gradient(circle_at_85%_10%,color-mix(in_oklch,var(--secondary),white_60%)_0,transparent_42%),linear-gradient(to_bottom,var(--background),color-mix(in_oklch,var(--background),var(--muted)_45%))]" />

        <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <Clock3 className="size-3.5" aria-hidden="true" />
                Built for speed
              </span>

              <div className="space-y-4">
                <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Shorten links that deserve attention.
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  Create, manage, and optimize every URL from one place. From
                  campaign launches to daily sharing, this app helps your links
                  stay clean, trackable, and high-performing.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/dashboard">Start shortening</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">Explore features</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-1 text-left">
                <div>
                  <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    99.9%
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Uptime
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    &lt; 120ms
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Redirect avg
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    24/7
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Link access
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-[0_18px_60px_-30px_color-mix(in_oklch,var(--foreground),transparent_80%)] backdrop-blur-sm md:p-7">
              <div className="rounded-2xl border border-border bg-background p-5 md:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">
                    Example link preview
                  </p>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                    Active
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-border bg-muted/35 p-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Original URL
                    </p>
                    <p className="mt-1 truncate text-sm text-foreground">
                      https://mycampaign.example.com/summer-launch?utm=ads
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-muted/35 p-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Short URL
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      links.yourapp.io/summer24
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg border border-border p-3">
                      <p className="text-xs text-muted-foreground">Clicks</p>
                      <p className="mt-1 text-lg font-semibold">14,832</p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <p className="text-xs text-muted-foreground">CTR</p>
                      <p className="mt-1 text-lg font-semibold">12.6%</p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <p className="text-xs text-muted-foreground">QR scans</p>
                      <p className="mt-1 text-lg font-semibold">4,108</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="features" className="space-y-7 pt-2">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Feature highlights
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything you need to make links work harder.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-secondary p-2.5 text-secondary-foreground">
                    <feature.icon className="size-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card p-7 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Simple workflow
                </p>
                <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  Launch links in three quick steps.
                </h2>
                <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                  Create your short URL, share it anywhere, then refine your
                  campaigns using live performance data.
                </p>
              </div>

              <ol className="space-y-3">
                {[
                  "Paste a destination URL and generate a short link.",
                  "Share across web, email, social, and QR placements.",
                  "Review analytics and optimize for better conversions.",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-3"
                  >
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-6 text-foreground/90">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/35 p-8 text-center shadow-sm md:p-12">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to ship cleaner links today?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Join your next campaign with a link shortener built for clarity,
              speed, and insight from the first click.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/dashboard">Open dashboard</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">See core features</Link>
              </Button>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
