import React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - typething",
  description: "Terms of Service for typething, a macOS app by AGHAZADA LLC.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 8, 2026
        </p>

        <div className="mt-10 flex flex-col gap-8">
          <Section title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using typething (the
              &quot;App&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, do not use
              the App. The App is provided by AGHAZADA LLC (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located at 8206
              LOUISIANA BLVD NE, STE A #7841 ALBUQUERQUE, NM 87113.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              typething is a macOS application that allows users to create and
              manage notes, save bookmarks, and store keys and other sensitive
              information locally on their device. The App is designed for
              personal and professional productivity use.
            </p>
          </Section>

          <Section title="3. License">
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use the App on any macOS device that you own or control,
              subject to these Terms and the Mac App Store Terms of Service. You
              may not:
            </p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc">
              <li>Copy, modify, or distribute the App or any part thereof.</li>
              <li>
                Reverse engineer, decompile, or disassemble the App, except to
                the extent permitted by applicable law.
              </li>
              <li>
                Rent, lease, lend, sell, or sublicense the App to any third
                party.
              </li>
              <li>
                Use the App for any unlawful purpose or in violation of any
                applicable laws or regulations.
              </li>
            </ul>
          </Section>

          <Section title="4. User Data and Privacy">
            <p>
              All data you create within the App (notes, bookmarks, keys) is
              stored locally on your device. We do not collect, access, or
              transmit your data. You are solely responsible for maintaining
              backups of your data. Please refer to our{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>{" "}
              for more details.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              The App and all associated intellectual property rights, including
              but not limited to trademarks, copyrights, trade secrets, and
              patents, are and remain the exclusive property of AGHAZADA LLC.
              These Terms do not grant you any rights to use our trademarks,
              logos, or brand features.
            </p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
              WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, AGHAZADA LLC
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF
              OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP.
            </p>
          </Section>

          <Section title="8. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless AGHAZADA LLC and
              its officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, and expenses, including
              reasonable attorney fees, arising out of or related to your use of
              the App or violation of these Terms.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              We may terminate or suspend your access to the App at any time,
              without prior notice or liability, for any reason, including if you
              breach these Terms. Upon termination, your license to use the App
              will immediately cease.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of New Mexico, United States, without regard
              to its conflict of law provisions.
            </p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective when posted on this page with an updated revision
              date. Your continued use of the App after changes constitutes
              acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have questions about these Terms of Service, please contact
              us at:
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
