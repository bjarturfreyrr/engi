import type { Metadata } from "next"
import PageShell from "@/components/ny/PageShell"
import Pricing from "@/components/ny/Pricing"
import Process from "@/components/ny/Process"

export const metadata: Metadata = {
  title: "Verð – Móar",
  description: "Start 9.990, Basic 16.990 og Bókun 29.990 kr. á mánuði án vsk. Ekkert stofngjald.",
}

const page = () => (
  <PageShell current="/verd" title="Verð á vefsíðu í áskrift">
    <Pricing />
    <Process />
  </PageShell>
)

export default page
