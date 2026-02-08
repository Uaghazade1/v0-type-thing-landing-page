import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Details } from "@/components/details"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Details />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
