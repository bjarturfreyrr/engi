import type { Metadata } from "next"
import PageShell from "@/components/ny/PageShell"
import Work from "@/components/ny/Work"

export const metadata: Metadata = {
  title: "Verkin – Móar",
  description: "Vefir sem Móar hefur hannað og sér um í dag.",
}

const page = () => (
  <PageShell current="/verkin" title="Verkin okkar">
    <Work />
  </PageShell>
)

export default page
