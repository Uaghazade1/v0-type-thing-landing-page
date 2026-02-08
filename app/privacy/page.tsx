import React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - typething",
  description: "Privacy Policy for typething, a macOS app by AGHAZADA LLC.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 8, 2026
        </p>

        <div className="mt-10 flex flex-col gap-8">
          <Section title="Introduction">
            <p>
              AGHAZADA LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;) operates the typething application (the
              &quot;App&quot;). This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our App.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>
              typething is designed with privacy at its core. The App operates
              entirely on your local device. We do not collect, transmit, or
              store any personal data on external servers. Specifically:
            </p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc">
              <li>
                <strong className="text-foreground">Notes, bookmarks, and keys</strong> you
                create are stored locally on your Mac and are never sent to our
                servers or any third party.
              </li>
              <li>
                <strong className="text-foreground">No analytics or tracking</strong> tools
                are embedded in the App. We do not track your usage patterns,
                behavior, or activity.
              </li>
              <li>
                <strong className="text-foreground">No account creation</strong> is required
                to use the App. We do not collect email addresses, names, or
                other identifying information through the App itself.
              </li>
            </ul>
          </Section>

          <Section title="Information Collected by Apple">
            <p>
              If you download typething from the Mac App Store, Apple may collect
              certain information in accordance with their own privacy policy.
              This is outside of our control. We encourage you to review
              Apple&apos;s Privacy Policy at{" "}
              <a
                href="https://www.apple.com/privacy/"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                apple.com/privacy
              </a>
              .
            </p>
          </Section>

          <Section title="Data Storage and Security">
            <p>
              All data created within typething is stored locally on your device.
              We do not have access to your data. The security of your
              information depends on the security of your device and operating
              system. We recommend keeping your macOS up to date and using strong
              device passwords.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              typething does not integrate with any third-party analytics,
              advertising, or tracking services. The App does not share your data
              with any third parties.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our App is not directed to children under the age of 13. We do not
              knowingly collect personal information from children. Since the App
              does not collect any personal data, there is no risk of
              inadvertently collecting information from minors.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated revision date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have questions or concerns about this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <p className="text-foreground font-medium">AGHAZADA LLC</p>
              <p>8206 LOUISIANA BLVD NE, STE A #7841</p>
              <p>ALBUQUERQUE, NM 87113</p>
              <a
                href="mailto:info@typething.app"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                info@typething.app
              </a>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  )
}
