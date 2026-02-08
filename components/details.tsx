import React from "react"
import { Monitor, Shield, Zap, Command } from "lucide-react"

export function Details() {
  return (
    <section className="border-t border-border bg-card px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance">
            Built for macOS, built for you
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            A native experience designed to feel right at home on your Mac.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <DetailItem
            icon={<Monitor className="h-5 w-5" />}
            title="Native macOS app"
            description="Built with Swift for a fast, responsive experience that integrates seamlessly with your Mac workflow."
          />
          <DetailItem
            icon={<Shield className="h-5 w-5" />}
            title="Privacy first"
            description="Your data stays on your device. No cloud sync, no tracking, no third-party access."
          />
          <DetailItem
            icon={<Zap className="h-5 w-5" />}
            title="Instant access"
            description="Launch typething from the menu bar or with a keyboard shortcut. Your content is always a keystroke away."
          />
          <DetailItem
            icon={<Command className="h-5 w-5" />}
            title="Keyboard-driven"
            description="Navigate, search, and manage everything without leaving the keyboard. Designed for power users."
          />
        </div>
      </div>
    </section>
  )
}

function DetailItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-foreground">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
