const industries = [
  "Fasteignasölur",
  "Lögfræðistofur",
  "Verktaka",
  "Fjármálafyrirtæki",
  "Snyrtistofur",
  "Læknastofur",
  "Iðnaðarfyrirtæki",
]
const barColors = ["#3B82F6", "#34D399", "#E6EEF3"]

const features = [
  { label: "Hönnun" },
  { label: "Hýsing" },
  { label: "Ekkert stofngjald", variant: "ny-pill--green" },
  { label: "Vefumsjón" },
  { label: "SSL" },
  { label: "Bókanir" },
  { label: "Fast mánaðargjald", variant: "ny-pill--blue" },
  { label: "Viðhald" },
  { label: "Öryggisuppfærslur" },
]

// Hver röð er tvítekin svo marquee-hreyfingin lykkist án samskeyta
const Industries = () => {
  return (
    <section className="ny-for" aria-labelledby="fyrir-hverja">
      <h2 id="fyrir-hverja" className="rv">
        Við smíðum vefi fyrir
        <span className="ny-sr"> {industries.join(", ").toLowerCase()}</span>
      </h2>
      <div className="ny-marq-row" aria-hidden="true">
        <div className="ny-marq ny-marq--big">
          {[0, 1].map((copy) =>
            industries.map((name, i) => (
              <span key={`${copy}-${name}`} style={{ display: "contents" }}>
                <span>{name}</span>
                <span className="ny-bar" style={{ background: barColors[i % barColors.length] }} />
              </span>
            ))
          )}
        </div>
      </div>
      <div className="ny-marq-row" aria-hidden="true">
        <div className="ny-marq ny-marq--pills">
          {[0, 1].map((copy) =>
            features.map((f) => (
              <span key={`${copy}-${f.label}`} className={`ny-pill ${f.variant ?? ""}`}>{f.label}</span>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Industries
