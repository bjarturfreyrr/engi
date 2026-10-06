import type { Metadata } from "next"
import PageShell from "@/components/ny/PageShell"
import Build from "@/components/ny/Build"
import Process from "@/components/ny/Process"

export const metadata: Metadata = {
  title: "Smíðin – Móar",
  description: "Svona verður vefurinn þinn til: grind, hönnun, efni og í loftið.",
}

const page = () => (
  <PageShell current="/smidin" title="Smíðin – svona verður vefurinn þinn til">
    <Build />
    <Process />
  </PageShell>
)

export default page
