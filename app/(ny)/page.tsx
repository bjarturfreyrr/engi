import type { Metadata } from "next"
import Header from "@/components/ny/Header"
import Hero from "@/components/ny/Hero"
import Industries from "@/components/ny/Industries"
import Build from "@/components/ny/Build"
import Included from "@/components/ny/Included"
import Work from "@/components/ny/Work"
import Pricing from "@/components/ny/Pricing"
import Process from "@/components/ny/Process"
import Contact from "@/components/ny/Contact"
import Footer from "@/components/ny/Footer"

export const metadata: Metadata = {
  title: "Móar – Vefsíðan þín, í áskrift",
  description:
    "Við hönnum, hýsum og sjáum um vefinn fyrir eitt fast mánaðargjald. Ekkert stofngjald.",
}

const page = () => {
  return (
    <>
      <a className="ny-skip" href="#efni">Fara beint í efni</a>
      <Header />
      <main id="efni">
        <Hero />
        <Industries />
        <Build />
        <Included />
        <Work />
        <Pricing />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default page
