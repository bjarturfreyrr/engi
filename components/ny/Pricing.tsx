import { ArrowRight, Check } from "lucide-react"

const features = [
  "Allt að 6 undirsíður",
  "Vefumsjón og sambandsform",
  "Hýsing, SSL og lén",
  "Viðhald og uppfærslur",
]

const terms = [
  { title: "Ekkert stofngjald", desc: "Hönnun og uppsetning eru innifalin. Þú greiðir fyrst þegar vefurinn fer í loftið." },
  { title: "8 mánaða binditími", desc: "Binditíminn hefst þegar vefurinn fer í loftið. Eftir það er eins mánaðar uppsagnarfrestur." },
  { title: "Þú getur keypt vefinn", desc: "Eftir binditímann getur þú keypt vefinn eða haldið áfram í áskrift." },
]

const Pricing = () => {
  return (
    <section id="verd" className="ny-price">
      <div className="ny-price__inner">
        <div className="ny-price__head">
          <div>
            <p className="ny-eyebrow rv">Verð</p>
            <h2 className="ny-h2 rv s2">Ekkert stofngjald.<br />Bara áskrift.</h2>
          </div>
          <p className="rv s3">Eitt verð sem inniheldur hönnun, hýsingu og viðhald. Öll verð eru án vsk.</p>
        </div>
        <div className="ny-plans">
          <div className="ny-plan ny-plan--dark clip-up">
            <div className="ny-plan__bar">
              <span>Áskrift</span>
              <span style={{ color: "#34D399" }}>Allt innifalið</span>
            </div>
            <div className="ny-plan__body">
              <p>Allt sem lítið fyrirtæki þarf.</p>
              <div className="ny-plan__price">
                <b>17.990</b>
                <span>kr./mán.</span>
              </div>
              <ul>
                {features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} strokeWidth={3} color="#34D399" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="ny-btn ny-btn--green" href="#samband">
                Fá tilboð <ArrowRight className="arr" size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <ul className="ny-terms">
            {terms.map((term, i) => (
              <li key={term.title} className={`rv ${i ? `s${i + 1}` : ""}`}>
                <span className="ny-terms__n">0{i + 1}</span>
                <span className="ny-terms__t">
                  <b>{term.title}</b>
                  <span>{term.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Pricing
