import type { Metadata } from "next"
import PageShell from "@/components/ny/PageShell"
import Included from "@/components/ny/Included"
import Industries from "@/components/ny/Industries"

export const metadata: Metadata = {
  title: "Innifalið – Móar",
  description: "Hönnun, hýsing og viðhald í einu mánaðargjaldi. Þetta fylgir öllum vefjum hjá Móar.",
}

const page = () => (
  <PageShell current="/innifalid" title="Innifalið í áskrift hjá Móar">
    <Included />
    <Industries />
  </PageShell>
)

export default page
