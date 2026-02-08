import React from "react"
import { FileText, Bookmark, KeyRound } from "lucide-react"

export function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
        Available on the Mac App Store
      </div>

      <h1 className="mt-8 max-w-3xl text-center text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight text-balance">
        Your notes, bookmarks, and keys in one place
      </h1>

      <p className="mt-5 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
        typething is a macOS app that keeps your notes, saved bookmarks, and
        important keys organized and instantly accessible.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download for Mac
        </a>
      </div>

      <div className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
        <FeatureCard
          icon={<FileText className="h-5 w-5" />}
          title="Notes"
          description="Write and organize your thoughts with a clean, distraction-free editor."
        />
        <FeatureCard
          icon={<Bookmark className="h-5 w-5" />}
          title="Bookmarks"
          description="Save and categorize links so they are always one click away."
        />
        <FeatureCard
          icon={<KeyRound className="h-5 w-5" />}
          title="Keys"
          description="Store API keys, passwords, and secrets securely on your Mac."
        />
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:bg-accent">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
