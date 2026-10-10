import { ArrowRight, Check } from "lucide-react"

const plans = [
  {
    name: "Start",
    n: "01",
    lead: "Einn vefur á einni síðu.",
    price: "9.990",
    features: [
      "Ein löng síða með allt að 5 hlutum",
      "Vefumsjón og sambandsform",
      "Hýsing, SSL og lén",
      "Viðhald og uppfærslur",
      "1 efnisbreyting á mánuði (30 mín.)",
    ],
    cta: "Velja Start",
    dark: false,
  },
  {
    name: "Basic",
    n: "Vinsælast",
    lead: "Allt sem lítið fyrirtæki þarf.",
    price: "16.990",
    features: [
      "Allt að 6 undirsíður",
      "Allt sem er í Start",
      "2 efnisbreytingar á mánuði (1 klst.)",
    ],
    cta: "Velja Basic",
    dark: true,
  },
  {
    name: "Bókun",
    n: "03",
    lead: "Fyrir stofur sem taka við bókunum.",
    price: "29.990",
    features: [
      "Allt að 10 undirsíður",
      "Bókunarkerfi með áminningum í tölvupósti",
      "4 efnisbreytingar á mánuði (2 klst.)",
      "Mánaðarleg samantekt um umferð og bókanir",
    ],
    cta: "Velja Bókun",
    dark: false,
  },
]

const terms = [
  { title: "Ekkert stofngjald", desc: "Hönnun og uppsetning eru innifalin í mánaðargjaldinu." },
  { title: "8 mánaða binditími", desc: "Fyrsta greiðsla og binditíminn hefjast um mánaðamót, tveimur mánuðum eftir undirritun. Eftir það er eins mánaðar uppsagnarfrestur." },
  { title: "Þú getur keypt vefinn", desc: "Eftir binditímann getur þú keypt vefinn, frá 59.900 kr., eða haldið áfram í áskrift." },
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
          <p className="rv s3">Hönnun, hýsing og viðhald í einu mánaðargjaldi. Öll verð eru án vsk.</p>
        </div>
        <div className="ny-plans">
          {plans.map((plan) => (
            <div key={plan.name} className={`ny-plan clip-up ${plan.dark ? "ny-plan--dark" : ""}`}>
              <div className="ny-plan__bar">
                <span>{plan.name}</span>
                <span style={plan.dark ? { color: "#34D399" } : undefined}>{plan.n}</span>
              </div>
              <div className="ny-plan__body">
                <p>{plan.lead}</p>
                <div className="ny-plan__price">
                  <b>{plan.price}</b>
                  <span>kr./mán.</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={18} strokeWidth={3} color={plan.dark ? "#34D399" : "#0E7A55"} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className={`ny-btn ${plan.dark ? "ny-btn--green" : "ny-btn--dark-outline"}`} href="#samband">
                  {plan.cta} <ArrowRight className="arr" size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
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
    </section>
  )
}

export default Pricing
