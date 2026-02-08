import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <Image
              src="/logo.png"
              alt="typething logo"
              width={120}
              height={28}
              className="h-6 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Notes, bookmarks, and keys for macOS.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-foreground">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-foreground">Contact</h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@typething.app"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                info@typething.app
              </a>
              <p className="text-sm text-muted-foreground">
                AGHAZADA LLC
              </p>
              <p className="max-w-[200px] text-xs text-muted-foreground leading-relaxed">
                8206 LOUISIANA BLVD NE, STE A #7841 ALBUQUERQUE, NM 87113
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AGHAZADA LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
