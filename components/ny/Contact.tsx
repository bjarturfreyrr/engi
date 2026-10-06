"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("nafn") ?? "")
    const company = String(data.get("fyrirtaeki") ?? "")
    const phone = String(data.get("simi") ?? "")

    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Fyrirtæki og sími fara með í skilaboðin því /api/contact tekur bara nafn, netfang, efni og skilaboð
      const extra = [company && `Fyrirtæki: ${company}`, phone && `Sími: ${phone}`].filter(Boolean).join("\n")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: String(data.get("netfang") ?? ""),
          subject: company ? `Fyrirspurn frá ${company}` : undefined,
          message: [String(data.get("skilabod") ?? ""), extra].filter(Boolean).join("\n\n"),
        }),
      })
      const json = await res.json()
      if (!res.ok) {
        throw new Error(json.error || "Eitthvað fór úrskeiðis.")
      }
      setSuccess(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eitthvað fór úrskeiðis.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="samband" className="ny-section">
      <div className="ny-contact">
        <h2 className="ny-contact__big rv-l">Byrjum<br /><span style={{ color: "#34D399" }}>saman.</span></h2>
        <div className="ny-contact__row">
          <div className="ny-contact__info rv">
            <p>Segðu okkur aðeins frá fyrirtækinu þínu og við sendum þér tilboð.</p>
            <a href="mailto:moar@xn--mar-gna.is">moar@móar.is</a>
          </div>
          <form className="ny-form rv s2" onSubmit={handleSubmit}>
            <label>Nafn
              <input type="text" name="nafn" placeholder="Jón Jónsson" autoComplete="name" required />
            </label>
            <label>Fyrirtæki
              <input type="text" name="fyrirtaeki" placeholder="Fyrirtækið ehf." autoComplete="organization" />
            </label>
            <label>Netfang
              <input type="email" name="netfang" placeholder="jon@fyrirtaeki.is" autoComplete="email" required />
            </label>
            <label>Sími
              <input type="tel" name="simi" placeholder="000 0000" autoComplete="tel" />
            </label>
            <label className="full">Hvað vantar þig?
              <textarea name="skilabod" rows={3} required />
            </label>
            <button className="ny-btn ny-btn--green full" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>Sendi <Loader2 className="ny-spin" size={18} aria-hidden="true" /></>
              ) : (
                <>Senda fyrirspurn <ArrowRight className="arr" size={18} aria-hidden="true" /></>
              )}
            </button>
            <p className="ny-form__status" role="status" aria-live="polite">
              {success && <span className="ny-form__status--ok">Takk! Við höfum samband fljótlega.</span>}
              {error && <span className="ny-form__status--err">{error}</span>}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
